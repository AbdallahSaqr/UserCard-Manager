export default function UsersCard(props) {
  const { data } = props;
  return (
    <div className="card text-center">
      <img
        src={data.image}
        alt="..."
        className="rounded-circle mx-auto mt-3"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <span
          className={`badge ${
            data.role === "admin"
              ? "bg-danger"
              : props.data.role === "user"
              ? "bg-success"
              : props.data.role === "moderator"
              ? "bg-warning text-dark"
              : "bg-secondary"
          } mb-2`}
          style={{ fontSize: "0.9rem" }}
        >
          {data.role}
        </span>
        <p
          className="card-text"
          style={{
            lineHeight: "1.4",
            maxHeight: "7em",
            overflow: "hidden",
          }}
        >
          {data.username}
        </p>
        <p
          className="card-text"
          style={{
            lineHeight: "1.4",
            maxHeight: "7em",
            overflow: "hidden",
          }}
        >
          {data.email}
        </p>
        <p
          className="card-text"
          style={{
            lineHeight: "1.4",
            maxHeight: "7em",
            overflow: "hidden",
          }}
        >
          {data.phone}
        </p>
        <p
          className="card-text"
          style={{
            lineHeight: "1.4",
            maxHeight: "7em",
            overflow: "hidden",
          }}
        >
          {data.birthDate}
        </p>
      </div>
    </div>
  );
}
