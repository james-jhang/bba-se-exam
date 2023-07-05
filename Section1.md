Section 1:

1. What is the purpose of the "key" prop in React?

    The "key" prop is used to be an identifier for the components of a list. When the list is updated, adding or removing components, React uses "key" prop to identify which components should be manipulated.

3. What is the purpose of the "useEffect" hook in React?

    It is used to registered a callback function for a component to doing something after the component is updated. 
    The "update" indicates every time the component is rendered.

4. What is the purpose of the "setState" function in React class components?

    It is used to update the internal state of a component. By using "setState", React can track the changes made on states and know when to re-render the component.

5. What technique is commonly used to handle authentication and authorization in Node.js?

    For authentication, we can use token-based authentication to verify whether the login user is a legal identity. If we want to build our own account system, we can use JWT. If we want to use other popular account services such as Google or Facebook, we can use Passport to handle the OAuth protocol.
    
    For authorization, we can design an RBAC mechanism. In RBAC, each user can have single or multiple roles, based on requirements, and each role has privileges for the operations on resources. When a user is authenticated successfully, it acts as a legal role to manipulate resources.

6. What is the role of a package manager in Node.js?

    "Don't reinvent the wheel", that is what we have been taught as software developers. Use well-known third-party tools or libraries instead, which helps us reduce costs and avoid potential issues. A package manager in Node.js, such as npm, helps us to use third-party packages easier. We can install or uninstall packages via simple cli and don't need to handle the dependency between packages by ourselves.
