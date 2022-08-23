import Controller from './Controller';
import Notification from '../models/NotificationModel';
import NotificationService from '../services/NotificationService';

const notificationService = new NotificationService(
  new Notification().getInstance(),
);

class NotificationController extends Controller {
  constructor(service) {
    super(service);
  }
}
export default new NotificationController(notificationService);
