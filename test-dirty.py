def build_video_data(id=None, input_type=None, data=None, err=Error.none):
    return dict(id, input_type, data, err)

class Error(Enum):
    none = 1
    download_failed = 2
    permission_problem = 3
    copyright_problem = 4
    bad_input = 5
