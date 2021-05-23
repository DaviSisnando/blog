const Blog = require('../models/Blog');

module.exports = {

  async create(req, res) {
    try {
      const blog = await Blog.create(req.body);
  
      return res.status(201).json({ data: blog });
    } catch (e) {
      return res.status(400).json({ error: e })
    }
  },

  async index(req, res) {
    const { page = 1, limit = 10 } = req.query;

    const blogs = await Blog.paginate({}, 
      { 
        limit, 
        sort: { createdAt: -1 }, 
        page
      }
    );

    return res.json({ data: blogs })
  },

  async show(req, res) {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        error: "Blog not found"
      })
    }
    return res.json({ data: blog });
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
  
      const blog = await Blog.findByIdAndDelete(id);
  
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" })
      }

      return res.json({ data: blog })
    } catch (e) {
      return res.status(400).json({ error: e })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
  
      const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" })
      }

      return res.json({ data: blog })
    } catch (e) {
      return res.status(400).json({ error: e })
    }
  }
}
