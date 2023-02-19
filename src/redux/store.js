import {configureStore} from "@reactivex/rxjs";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
