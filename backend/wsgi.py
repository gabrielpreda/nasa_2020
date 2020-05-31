from app.api import app
from app import config

if __name__ == '__main__':
    app.run(config.HOST, config.PORT)
