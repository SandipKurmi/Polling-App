import Controller from './Controller';
import Bookmark from '../models/BookmarkModel';
import BookmarkService from '../services/BookmarkService';

const bookmarkService = new BookmarkService(new Bookmark().getInstance());

class BookmarkController extends Controller {
  constructor(service) {
    super(service);
    this.getAllBookmark = this.getAllBookmark.bind(this);
  }

  async getAllBookmark(req, res) {
    let response = await this.service.getAllBookmark(req, res);
    return res.status(response.statusCode).send(response);
  }
}

export default new BookmarkController(bookmarkService);
