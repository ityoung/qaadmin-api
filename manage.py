import os
from flask import send_from_directory
from flask_script import Manager, Server
from apps import create_app
from apps.libs.myconfigparser import MyConfig

config = MyConfig.init('config.ini')

app = create_app()


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


manager = Manager(app)
manager.add_command('runserver', Server(use_debugger=True, host='0.0.0.0',
                                        port=config['server']['port']))

if __name__ == '__main__':
    manager.run()
