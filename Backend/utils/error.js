

export default function error(err,controller,res) {
    console.log(`Error in ${controller} ${err.message || err}`);
    return res.status(500).json({
        message : "Something went wrong try again"
    })
}