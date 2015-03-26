import uuid


def generate_uuid(length):
    """
        Generate uuid
    :length: - specify the length of uuid string.
    """
    return uuid.uuid4().hex[:length]
