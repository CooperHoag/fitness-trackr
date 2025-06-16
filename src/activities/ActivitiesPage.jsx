import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function ActivitiesPage() {
  const { data: activities, loading, error } = useQuery("/activities");
  const {token} = useAuth();

  // const mutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch(API + "/activities", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     });
  //     const result = await response.json();
  //     if (!response.ok) throw result;
  //     setToken(result.token);
  //   },
  // });

  if (loading || !activities) {
    return (<p>Loading...</p>)
  }

  if (error) {
    return (<p>{error}</p>)
  }

  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            {token ? <button>Delete</button> : null}
          </li>
        ))}
      </ul>
      
    </>
  );
}
