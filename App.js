import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <Screen>
      <ListItem title="Mosh" ImageComponent={<Icon name="email" />} />
    </Screen>
  );
}
