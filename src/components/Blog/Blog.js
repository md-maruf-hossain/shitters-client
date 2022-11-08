import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              SQL and NoSQL
              <p className="text-gray-600">5 Jan 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">Difference between SQL and NoSQL.</p>
            </div>
            <p className="text-gray-700 text-justify">
              <span className="font-bold">SQL: </span> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) . These databases have fixed or static or predefined schema . These databases are not suited for
              hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable. Follows ACID property. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.
            </p>
            <p className="text-gray-700 text-justify">
              <span className="font-bold">NoSQL: </span>Non-relational or distributed database system. They have dynamic schema.These databases are best suited for hierarchical data storage.These
              databases are not so good for complex queries. Horizontally scalable. Follows CAP(consistency, availability, partition tolerance). Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra
              etc.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              JWT
              <p className="text-gray-600">15 Sep 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">What is JWT, and how does it work?</p>
            </div>
            <p className="text-gray-700">
              <span className="font-bold">JWT:</span> For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It
              stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred
              syntax for APIs, surpassing XML.
            </p>
            <p className="text-gray-700">
              A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like
              this: xxxxx.yyyyy.zzzzz. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims.
              This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has
              permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer
              access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates
              the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving
              party verifies that the header and payload match the signature.{" "}
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              JS and Node js
              <p className="text-gray-600">28 Dec 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">What is the difference between javascript and NodeJS?</p>
            </div>
            <p className="text-gray-700">
              1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based
              server-side programming language.
              <br />
              2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
              <br />
              3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only
              enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              Node js
              <p className="text-gray-600">10 Nov 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">How does NodeJS handle multiple requests at the same time?</p>
            </div>
            <p className="text-gray-700">
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself
              process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads
              module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
