import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
    if (req.method === "GET") {
        connectDB();
        const hotels = await Hotel.find({ price: { $lte: req.query.price } });
        res.status(200).json({ msg: "Range Filter.", hotels });
    }
}



// export default async function handler(req, res) {
//     if (req.method === "GET") {
//         connectDB(); // Connect to the database

//         const { startPrice, endPrice } = req.query; // Get start and end price from request query parameters

//         // Check if both startPrice and endPrice are provided in the request
//         if (startPrice && endPrice) {
//             const hotels = await Hotel.find({
//                 price: {
//                     $gte: parseFloat(startPrice), // Greater than or equal to startPrice
//                     $lte: parseFloat(endPrice)   // Less than or equal to endPrice
//                 }
//             });
//             res.status(200).json({ msg: "Price Range Filter.", hotels });
//         } else {
//             res.status(400).json({ error: "Please provide both startPrice and endPrice parameters." });
//         }
//     }
// }
