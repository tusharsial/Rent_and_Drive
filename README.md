# Rent_and_Drive
Target Key:

Role: The target key is responsible for signing the target files in a software repository. Target files contain information about the software packages available in the repository, including their cryptographic hashes.
Function: Verifies the integrity of individual software artifacts and ensures that they have not been tampered with.
Delegation Key:

Role: Delegation keys are part of a hierarchical structure that allows for the delegation of signing authority. They are used to sign roles in the repository, including other delegation keys, enabling a structured trust model.
Function: Controls access and signing authority within different levels of the hierarchy, providing a way to delegate responsibilities for different parts of the repository.
Snapshot Key:

Role: The snapshot key is responsible for signing the snapshot file in the repository. The snapshot file lists all the target files and their cryptographic hashes, providing a snapshot of the repository's state at a specific point in time.
Function: Ensures that clients can trust the consistency of the repository by providing a verifiable list of all the target files and their integrity.
