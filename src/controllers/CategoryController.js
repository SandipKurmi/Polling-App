import Controller from './Controller';
import Category from '../models/CategoryModel';
import CategoryService from '../services/CategoryService';

const categoryService = new CategoryService(new Category().getInstance());

class CategoryController extends Controller {
  constructor(service) {
    super(service);
  }
}
export default new CategoryController(categoryService);
