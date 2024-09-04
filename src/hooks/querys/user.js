import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getUsers,
  deleteUser,
  vote,
  createUser
} from "../../services/endpoints";
export function useGetUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    onSuccess,
    onError,
  });
}
export function useDeleteUsers({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
export function useVote({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    mutationFn: vote,
    onSuccess,
    onError,
  });
}

export function useCreateUser({ onSuccess = () => {} } = {}) {
    const onError = () => {};
    return useMutation({
      mutationFn: createUser,
      onError,
      onSuccess,
    });
  }