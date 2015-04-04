from django.contrib.auth.backends import ModelBackend

from jimm.api.models import User


class ClientAuthenticationBackend(ModelBackend):
    """
    Custom authentication backend for authorization of clients.
    Main difference from default django's authenticate backend is Client model
    """

    def authenticate(self, email=None, password=None, **kwargs):
        try:
            client = User.objects.get(email=email)
            if client.check_password(password):
                return client
        except User.DoesNotExist:
            # Run the default password hasher once to reduce the timing
            # difference between an existing and a non-existing user (#20760).
            User().set_password(password)

    def get_user(self, user_id):
        UserModel = User
        try:
            return UserModel._default_manager.get(pk=user_id)
        except UserModel.DoesNotExist:
            return None
