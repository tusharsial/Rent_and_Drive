# Rent_and_Drive
Token Authentication:

Notary server optionally supports client authentication using JWT tokens.
An authorization server manages access controls and provides a cert bundle with the public key for token signing.
Token Authentication Process:

Clients without a token are redirected to the authorization server.
Clients log in to the authorization server via basic auth over HTTPS.
Clients obtain a bearer token for subsequent requests to the Notary server.
Metadata Upload by Client:

Clients upload new metadata files to the Notary server.
Metadata Validation by Notary Server:

Notary server checks uploaded metadata against previous versions for conflicts.
Signatures, checksums, and metadata validity are verified.
Timestamp and Snapshot Metadata Generation:

Upon successful validation, Notary server generates timestamp (and possibly snapshot) metadata.
Signing Process by Notary Signer:

Notary signer retrieves encrypted private keys from its database.
Keys are decrypted if available and used to sign the metadata.
Signatures are sent back to the Notary server.
Notary Server as Source of Truth:

Notary server is the source of truth for the state of a trusted collection, storing both client-uploaded and server-generated metadata.
Notification to Client:

Notary server notifies the client of a successful upload.
Download by Client:

The client can immediately download the latest metadata using the still-valid bearer token.
Handling Expired Timestamp:

If the timestamp has expired, Notary server initiates a sequence to generate a new timestamp.
It requests a signature from the Notary signer, stores the signed timestamp in the database, and sends the updated timestamp with the rest of the metadata to the client.
