# jimm

#Setup

Create database

```
create database jimm_db CHARACTER SET utf8 COLLATE utf8_general_ci;
```

## Usefull things
Dump data from model to json
```code=bash
python manage.py dumpdata api.order --indent=4 > shipping_fixture.json
```
