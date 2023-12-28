# Rent_and_Drive
Notary Server Compromise
Threats
Denial of Service
Attacker could reject client requests, corrupt or delete metadata, preventing access or upload.
Malicious Content
Attacker can serve arbitrary metadata for trusted collections, tricking clients.
Mitigations
Detection and Recovery
Clients with pinned trust detect malicious content.
Timestamp and snapshot keys remain secure in a server-only compromise.
Key rotation unnecessary for timestamp and snapshot keys.
Prevention
Robust authentication and authorization mechanisms.
Regular monitoring and auditing of server activities.
Notary Signer Compromise
Threats
Denial of Service
Attacker rejects server requests, corrupts or deletes keys, preventing signing.
Key Compromise
Attacker gains access to timestamp and snapshot private keys.
Mitigations
Detection and Recovery
Key rotations necessary for recovery.
Monitoring and logging signer activities for unusual patterns.
Prevention
Consider using Hardware Security Modules (HSM) for key storage.
Implement strong access controls for the signer.
Notary Client Keys and Credentials Compromise
Threats and Mitigations
Decrypted Delegation Key Only

Malicious Content: No
Rollback, Freeze, Mix and Match: No
Denial of Service: No
Mitigations: None needed.
Decrypted Delegation Key + Notary Service Write-capable Credentials

Malicious Content: Limited, maybe
Rollback, Freeze, Mix and Match: Limited, maybe
Denial of Service: Limited, maybe
Mitigations: Rotate compromised key and review delegation roles.
Decrypted Delegation Key + Decrypted Snapshot Key Only

Malicious Content: No
Rollback, Freeze, Mix and Match: No
Denial of Service: No
Mitigations: None needed.
Decrypted Delegation Key + Decrypted Snapshot Key + Notary Service Write-capable Credentials

Malicious Content: Limited
Rollback, Freeze, Mix and Match: Limited
Denial of Service: Limited
Mitigations: Rotate compromised key, review delegation roles, and update targets.
Decrypted Targets Key Only

Malicious Content: No
Rollback, Freeze, Mix and Match: No
Denial of Service: No
Mitigations: None needed.
Decrypted Targets Key + Notary Service Write-capable Credentials

Malicious Content: Maybe
Rollback, Freeze, Mix and Match: Maybe
Denial of Service: Limited, maybe
Mitigations: Rotate compromised key and assess delegation roles.
Decrypted Targets Key + Decrypted Snapshot Key Only

Malicious Content: No
Rollback, Freeze, Mix and Match: No
Denial of Service: No
Mitigations: None needed.
Decrypted Targets Key + Decrypted Snapshot Key + Notary Service Write-capable Credentials

Malicious Content: Yes
Rollback, Freeze, Mix and Match: Yes
Denial of Service: Limited
Mitigations: Rotate compromised key, update targets, and review delegation roles.
Decrypted Root Key + Any Combination of Decrypted Keys

Malicious Content: Yes
Rollback, Freeze, Mix and Match: Yes
Denial of Service: Yes
Mitigations: Rotate all compromised keys and contact Notary service provider.
Decrypted Root Key + Any Combination of Decrypted Keys + Notary Service Write-capable Credentials

Malicious Content: Yes
Rollback, Freeze, Mix and Match: Yes
Denial of Service: Yes
Mitigations: Rotate keys, update targets, and assess delegation roles.
Mitigations
Root Key Compromise
Manually reverse malicious changes and immediately rotate the root key.
Break repository history to disable existing clients with malicious changes.
Targets Key Compromise
Rotate compromised key and push a clean set of targets using the new key.
Delegations Key Compromise
Rotate compromised key and push a clean set of targets using the new key.
Notary Service Credential Compromise
Change credentials immediately upon detection.
Note: This threat model and mitigations guide aims to provide a comprehensive understanding of potential risks and actions to secure the Notary service. Further details can be tailored based on specific system architectures and deployment scenarios.
