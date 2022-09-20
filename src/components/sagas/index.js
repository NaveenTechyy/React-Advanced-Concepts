import { watchGetUsers } from "./usersSaga";

export default function* () {
  yield [watchGetUsers()];
}
