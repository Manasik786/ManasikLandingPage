const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const Service_N_PackageInquryModel = require("../models/Service_N_PackageInquryModel")
const sendEmail = require("../utils/sendEmail")
exports.CreateService_N_PackageList = catchAsyncErrors(async (req, res, next) => {
    
    const data = await Service_N_PackageInquryModel.create(req.body);

    res.status(201).json({
        success: true,
        data,
    })
})
exports.GetService_N_PackageItems = catchAsyncErrors(async (req, res, next) => {
    const data = await Service_N_PackageInquryModel.find();
    res.status(200).json({
        success: true,
        data,
    })
})

exports.DeleteService_N_PackageItems = catchAsyncErrors(async (req, res, next) => {
    const data = await Service_N_PackageInquryModel.findById(req.params.id)
    if (!data) {
        return next(new ErrorHandler("data  not found ", 404))
    }
  // for (let i = 0; i < data.images.length; i++) {
    //     await cloudinary.v2.uploader.destroy(data.images[i].public_id);
    // }

    await data.remove();
    res.status(200).json({
        success: true,
        message: "Data deleted successfully "
    })
})
exports.UpdateService_N_PackageItems = catchAsyncErrors(async (req, res, next) => {
    let data = await Service_N_PackageInquryModel.findById(req.params.id)
    // const { Position, Name, Phone, Email, Gender, Nationality, CV, Applied } = req.body

    if (!data) {
        return next(new ErrorHander("Data not found", 404));
    }
    // let images = []
    // if (typeof req.body.images === "string") {
    //     images.push(req.body.images);
    // }
    // else {
    //     images = req.body.images;
    // }
    // if (images !== undefined) {
    //     for (let i = 0; i < data.images.length; i++) {
    //         await cloudinary.v2.uploader.destroy(data.images[i].public_id);
    //     }

    //     const imagesLinks = [];

    //     for (let i = 0; i < images.length; i++) {
    //         const result = await cloudinary.v2.uploader.upload(images[i], {
    //             folder: "AviationsFolder",
    //         });

    //         imagesLinks.push({
    //             public_id: result.public_id,
    //             url: result.secure_url,
    //         });
    //     }

    //     req.body.images = imagesLinks;
    // }
    data = await Service_N_PackageInquryModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
    res.status(200).json({
        success: true,
        data,
    });
})
exports.SendComplaintLead = catchAsyncErrors(async (req, res, next) => {
    const { useremail, message } = req.body
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!useremail) {
        return next(new ErrorHandler("please write email", 404))
    }
    if (!pattern.test(useremail)) {
        return next(new ErrorHandler("Write Valid Email", 404))
    }
    try {
        sendEmail({
            email: useremail,
            subject: "Manasik Aviation",
            message,
        })
        res.status(200).json({
            success: true,
            message: "your complaint is forwarded to the administration"
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }

})