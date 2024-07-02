import { Model } from "@nozbe/watermelondb";
import {
  field,
  readonly,
  date,
  immutableRelation,
} from "@nozbe/watermelondb/decorators";

export default class AccountAllocation extends Model {
  static table = "account_allocations";

  static associations = {
    account: { type: 'belongs_to', key: 'account_id' },
    allocations: { type: 'belongs_to', key: 'allocation_id' },
  };

  @readonly @date("created_at") createdAt!: Date;
  @field("amount") amount!: number;
  @field("cap") cap!: number;

  @immutableRelation("account", "account_id") account: any;
  @immutableRelation("allocations", "allocation_id") allocation: any;


}
