import express from "express"

// Model
import Post from "../../models/post.js"

const router = express.Router()

// api/post
router.get("/", async(req, res)=> {
    const postFindResult = await Post.find()
    console.log(postFindResult, "All Post Get")
    res.json(postFindResult)
})

router.post("/", async(req, res, next) => {
    try {
        console.log(req, "req")
        const {title, contents, fileUrl, creator} = req.body
        const newPost = await Post.create({
            title,
            contents,
            fileUrl,
            creator,
        });
        res.json(newPost);
    } catch(e) {
        console.log(e);
    }
});
// 모듈화 해서 뺀다.
export default router;