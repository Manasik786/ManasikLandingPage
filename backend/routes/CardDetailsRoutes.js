const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetCardItems, CreateCardList, UpdateCardItems, DeleteCardItems, Arabicgetdata } = require("../controller/CardDetailsController")
router.route("/CardItems").get(GetCardItems)
router.route("/CreateCardList").post(CreateCardList)
router.route("/CardItems/:id").put(UpdateCardItems)
router.route("/CardItems/:id").delete(DeleteCardItems)
router.route("/email").post(SendComplaintLead)
router.route("/CardItemsar").get(Arabicgetdata)
module.exports = router;