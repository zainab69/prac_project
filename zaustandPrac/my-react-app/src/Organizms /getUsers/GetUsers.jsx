import { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import { fetchUser } from "@/Helper/Store/ApiFunctions";
import { Users } from "@/Helper/Store/useUser";
import { CheckboxReactHookFormMultiple } from "@/Atom /FilterDropdown/FilterDropdown";
import { DemoInput } from "@/Atom /DemoInput/DemoInput";
import { CustomTable } from "@/Atom /Table/CustomTable";
import { ButtonDemo } from "@/Atom /Button/Button";

const GetUsers = () => {
  const [showDropdown, setshowDropdown] = useState(false);
  const { isLoading, isError, data, error } = useQuery("users", fetchUser);
  const {
    users,
    setUsers,
    setSearch,
    search,
    filteredUsers,
    setFilteredUsers,
  } = Users();

  const search_user = users.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );
  const handleFilterChange = (selectedUsers) => {
    const filtered = users.filter((user) =>
      selectedUsers.includes(user.username)
    );
    setFilteredUsers(filtered);

    localStorage.setItem("filter", JSON.stringify(selectedUsers));
  };
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
    const storedfiltered = localStorage.getItem("filter");
    if (storedfiltered) {
      const filteredData = users.filter((user) =>
        filteredUsersFromStorage.includes(user.username)
      );
      setFilteredUsers(filteredData);
    }
  }, [data]);

  const handleButtonClick = () => {
    setshowDropdown(true);
  };
  return (
    <div>
      <ButtonDemo onClick={handleButtonClick} />
      {showDropdown && (
        <CheckboxReactHookFormMultiple
          users={users}
          onFilterChange={handleFilterChange}
          filteredData={filteredUsers.map((user) => user.username)}
        />
      )}
      <div
        className="m-10"
        onClick={() => {
          setshowDropdown(false);
        }}
      >
        <DemoInput setSearch={setSearch} />
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error?.message}</p>}
      {search ? (
        <div>
          <h2 className="text-lg font-bold mb-4">Search Results</h2>
          {search_user.length > 0 ? (
            <CustomTable users={search_user} />
          ) : (
            <p>No results found for "{search}"</p>
          )}
        </div>
      ) : filteredUsers.length > 0 ? (
        <CustomTable users={filteredUsers} />
      ) : (
        <CustomTable users={users} />
      )}
    </div>
  );
};

export default GetUsers;
