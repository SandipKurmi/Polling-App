import Service from './Service';
class BookmarkService extends Service {
  constructor(model) {
    super(model);
    this.getAllBookmark = this.getAllBookmark.bind(this);
  }

  async getAllBookmark(req, res) {
    try {
      const data = await this.model
        .find()
        .populate({ path: 'user', select: 'name image' })
        .populate({
          path: 'question',
          populate: { path: 'category', select: 'name category_icon' },
          select: 'questionTitle expireAt ',
        });

      return {
        error: false,
        message: 'request successfully',
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}

export default BookmarkService;
