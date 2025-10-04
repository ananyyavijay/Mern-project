import { asyncHandler } from "../utils/asyncHandler.js";

const registerUer = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "hello from Ananya"
    })
})

export {registerUer}