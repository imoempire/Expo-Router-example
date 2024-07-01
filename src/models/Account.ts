import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  nochange,
  readonly,
  date,
} from "@nozbe/watermelondb/decorators";

export default class Account extends Model {
  static table = "account";

  @text("name") name!: string;
  @field("cap") cap!: number;
  @field("tap") tap!: number;
}
