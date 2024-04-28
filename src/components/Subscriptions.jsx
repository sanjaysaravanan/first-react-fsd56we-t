import Subscription from "./Subscription";

const data = [
  {
    title: "Prime 1",
    features: [
      { title: "Two Screen", isEnabled: false },
      { title: "HD Resolution", isEnabled: false },
      { title: "Movies", isEnabled: true },
    ],
  },
  {
    title: "Prime 2",
    features: [
      { title: "Two Screen", isEnabled: true },
      { title: "HD Resolution", isEnabled: false },
      { title: "Movies", isEnabled: true },
    ],
  },
  {
    title: "Prime 3",
    features: [
      { title: "Two Screen", isEnabled: true },
      { title: "HD Resolution", isEnabled: true },
      { title: "Movies", isEnabled: true },
    ],
  },
];

const Subscriptions = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((val) => (
        <Subscription
          key={val.title}
          title={val.title}
          features={val.features}
        />
      ))}
      {/* {data.map((val) => (
        <Subscription key={val.title} {...val} />
      ))} */}
    </div>
  );
};

export default Subscriptions;
