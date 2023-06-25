import * as functions from "firebase-functions"
import * as logger from "firebase-functions/logger"

exports.sayHelloV1 = functions
  .runWith({
    timeoutSeconds: 60
  })
  .region("asia-northeast2")
  .https.onRequest(async (req, res) => {
    logger.log("Hello!! V1")
    res.status(200).send("Hello V1 world!")
  })
