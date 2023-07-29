import { createContext } from "react";

export const Context = createContext();
// import React, { createContext, useContext, useState } from 'react';

// // Step 1: Create a context
// const UserContext = createContext();

// // Step 2: Create a provider component
// function UserProvider({ children }) {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// // Step 3: Consume the context using useContext hook
// function UserProfile() {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <div>
//       {user ? (
//         <p>Welcome, {user.name}!</p>
//       ) : (
//         <p>Please log in.</p>
//       )}
//       <button onClick={() => setUser({ name: 'John' })}>Log In</button>
//     </div>
//   );
// }

// // Step 4: Wrap the components with the provider
// function App() {
//   return (
//     <UserProvider>
//       <UserProfile />
//     </UserProvider>
//   );
// }
