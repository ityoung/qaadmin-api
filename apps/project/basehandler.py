from apps.basehandler import BaseHandler


class ProjectHandler(BaseHandler):
    def project_exist(self, project_name: str) -> bool:
        """
        Check project existence
        :param project_name:
        :return: True: pass; False: error
        """
        return bool(self.mongo['Project'].find_one({'_id': project_name}))
