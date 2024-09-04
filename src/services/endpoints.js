import api from "./api";
import useAuthStore from "../stores/auth";

export async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

export async function deleteUser(_id) {
  const { data } = await api.delete(`/user/${_id}`);

  return data;
}
export async function createUser(body) {
    const { setUser } = useAuthStore.getState();

    const { data } = await api.post("/user", body);
    setUser(data);

    return data;
}

export async function vote({ id, body }) {
  const { data } = await api.put(`/user/${id}`, body);

  return data;
}

//ROOM

  export async function getRooms() {
    const { data } = await api.get("/room");
    return data;
  }
  export async function getRoom(code) {
    const { data } = await api.get(`/room/${code}`);
    console.log(data);
    return data;
  }
  
  export async function deleteRoom(_id) {
    const { data } = await api.delete(`/room/${_id}`);
  
    return data;
  }
  export async function createRoom(body) {
    const { data } = await api.post("/room", body);
  
    return data;
  }
  
  export async function addUser({ code, idUser }) {
    const { data } = await api.put(`/room/addUser/${code}`, {"users":[idUser]});
  
    return data;
  }
