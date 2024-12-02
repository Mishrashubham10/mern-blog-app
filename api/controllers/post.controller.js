import Post from '../models/post.model.js';
import User from '../models/user.model.js';

// @GET POSTS
// ROUTE GET
// METHOD : GET ALL POSTS
const getPosts = async (req, res) => {
  const posts = await Post.find();

  if (!posts) return res.status(400).json({ message: 'Posts not find' });

  res.status(200).json(posts);
};

// @GET POSTS
// ROUTE GET
// METHOD : GET A SINGLE POST
const getPost = async (req, res) => {
  const slug = req.params.slug;

  const post = await Post.findOne({ slug });

  if (!post) return res.status(400).json({ message: 'Post not find' });

  res.status(200).json(post);
};

// @ROUTE POST
// @METHOD : CREATE POST
const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json('Not authenticated');
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    res.status(404).json('User not found');
  }

  const newPost = new Post({ user: user._id, ...req.body });

  const post = await newPost.save();

  res.status(200).json(post);
};

// @ROUTE DELETE
// @METHOD : DELETE POST
const deletePost = async (req, res) => {
  const id = req.params.id;
  const clerkUserId = req.auth.userId;

  if (!id) return res.status(400).json({ message: 'Id is required' });

  const user = await User.findOne({ clerkUserId });

  const post = await Post.findByIdAndDelete({ _id: id, user: user._id });

  res.status(200).json('Post has been deleted');
};

export { getPosts, getPost, createPost, deletePost };