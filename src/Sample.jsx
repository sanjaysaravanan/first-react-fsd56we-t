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
        <div
          key={val.title}
          style={{ border: "2px solid", margin: "16px", padding: "16px" }}
        >
          <h2>{val.title}</h2>
          {val.features.map((feat) => (
            <h3
              key={feat.title}
              style={{
                textDecoration: feat.isEnabled ? "none" : "line-through",
              }}
            >
              {feat.isEnabled && <i className="fa-solid fa-check"></i>}
              {!feat.isEnabled && <i className="fa-solid fa-xmark"></i>}{" "}
              {feat.title}
            </h3>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
