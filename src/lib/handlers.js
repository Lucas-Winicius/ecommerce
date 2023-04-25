class Handles {
  onError(obj) {
    return {
      success: false,
      status: obj.status || 500,
      message:
        obj.message ||
        "There was an error that we couldn't find the reason for.",
      secondaryMessage:
        obj.secondaryMessage ||
        "It seems like there's a ghost in the system! We tried to find the error, but it mysteriously vanished. We're working on exorcising it and solving the issue, please try again later.",
      error: obj,
    };
  }

  onSuccess(obj) {
    return {
      success: true,
      status: obj.status || 200,
      message:
        obj.message ||
        "Congratulations, the operation was successfully completed!",
      secondaryMessage:
        obj.secondaryMessage ||
        "Success guaranteed, you are more efficient than a robotic vacuum cleaner! Congratulations on your achievement!",
      data: obj.data,
    };
  }
}

export default new Handles();
