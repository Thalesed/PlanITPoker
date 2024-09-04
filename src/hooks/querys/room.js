import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getRoom,
  deleteRoom,
  addUser,
  createRoom
} from "../../services/endpoints";

export function useGetRoom({
  onSuccess = () => {},
  onError = (err) => console.error(err),
  code,
} = {})  {
  return useQuery({
    queryKey: ["room", code ],
    queryFn: () => getRoom(code),
    onSuccess,
    onError,
  });
}

export function useDeleteRoom({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: deleteRoom,
    onSuccess,
    onError,
  });
}
export function useAddUser({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: addUser,
    onSuccess,
    onError,
  });
}

export function useCreateRoom({ onSuccess = () => {} } = {}) {
    const onError = () => {};
    return useMutation({
      mutationFn: createRoom,
      onError,
      onSuccess,
    });
  }