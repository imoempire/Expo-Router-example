import { View, Text } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import AccountAllocation from "@/src/models/AccountAllocations";
import Account from "@/src/models/Account";

type AccountAllocationItem = {
  accountAllocation: AccountAllocation;
  account: Account;
};

const AccountAllocationItem = ({
  accountAllocation,
  account,
}: AccountAllocationItem) => {
  return (
    <View
      key={account?.id}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text>{account.name}: {account.cap}%</Text>
      <Text>${accountAllocation.amount}</Text>
    </View>
  );
};

const enhance = withObservables(
  ["accountAllocation"],
  ({ accountAllocation }: { accountAllocation: AccountAllocation }) => ({
    accountAllocation,
    account: accountAllocation.account,
  })
);

export default enhance(AccountAllocationItem);
