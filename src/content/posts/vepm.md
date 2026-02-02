---
title: "Introduction of Cryptograpy"
published: 2024-06-04
description: ""
image: "/images/posts/cryptography.webp"
tags: ["Cryptography"]
category: "CyberSecurity"
draft: false
---
# Introduction of Cryptography

## Caesar Cipher

Assume letters are numbered from 0 - 25, we have the following two functions:

- Encryption function 

  $E_n(x)=(x+n)\mod26$

   where n is the key, x is the plaintext letter.

- Decryption function $D_n(x)=(x−n)\mod26$ where n is the key, x is the ciphertext letter.

Here’s a reminder about modular arithmetic: If there’s an equation A/B=Q remainder R, where A is the dividend, B is the modulus, Q is the quotient, R is the remainder. Then the modulus operation (%) in programs and calculators just takes the remainder, i.e., A mod B=R.

**It can be attacked using cryptanalysis, in this case using:**

**Brute force: just decrypt using 1 to 25 as the shift and search for meaningful text**

**Letter frequency – just measure the frequency of the letters in ciphertext and compare to see how much it has shifted**

## Polyalphabetic Cipher

Vigenère cipher was invented by **Giovan** **Battista** **Bellaso** in 1553

Misattributed to Blaise de Vigenère

Works by using a repeating key word: letters are shifted by the number code of the letter in the key

## Confusion and Diffusion

Claude Shannon (1945) A Mathematical Theory of Cryptography

**Confusion**

Each part of the ciphertext depends on several parts of the key 
Hides the relationship between ciphertext and key

**Diffusion**
Change in plain text will result in larger changes in ciphertext

Hide the relationship between the ciphertext and plaintext

We can achieve confusion/diffusion using a combination of substitution

## Cryptography Today

Two types of encryption used:

**Symmetric key cryptography:** Both parties share the same single key

**Asymmetric key cryptography:** Each party has 2 keys: public key and private key

Both types or encryption are used for different purposes and have different benefits and drawbacks

In addition to the above, there are other cryptographic functions that do not require a key e.g. Hash functions

## DES（Data Encryption Standard）

Key Space:$2^{56}$

Block length is 64 bits

**Key length is 56 bits (64 bits with 8 bits as parity)**

The process for encryption involves:

1.Key schedule 2.Subkeys are generated from the key for 16 rounds of application to the plaintext 3.Permutations (diffusion) by initial expansion through duplication and mixing outputs at the end of each round 4.Substitutions: using S-boxes which are lookup tables that take 6 input bits and output 4 output bits

**Different modes of encrypting a sequence of blocks:**

**ECB (Electronic Codebook): Each block is encrypted independently**

-Some information leakage.
-Can be parallelised.

**CBC (Cipher Block Chaining) Each encrypted block is** **XOR’d** **with the next block. Start with the IV**

-Propagates errors.

**CFB (Cipher Feedback) Same mechanism as CBC but operates as a stream of real time data**

-Propagates errors.

**OFB (Output Feedback) Same as CFB but uses the IV and encrypted versions of the IV as input to successive blocks**

-Does not propagate errors.

**CTR (Counter) Same as OFB but uses a simple counter to alter seed input to each encryption**

-Can be parallelized.

> [!WARNING]
>
> **The DES key length became a liability and DES was cracked by brute force in 1997**

The solution to DES was to do it 3 times in a row and this became **3DES (Triple DES)**.  Don’t do **2DES (Double DES)** because it is vulnerable to a **meet-in-the-middle attack**.  Won’t go through details but it makes it not much better than DES.  Variants of 3DES depending on number of keys used and whether you use 3 encryptions (EEE) or encryption, decryption, encryption (EDE).

In the meantime, **Advanced Encryption Standard** adopted by US NIST in 2000. Based on the **Rijndael scheme**.  128 bit block length.  Keys of:  

- 128 bits with 10 rounds of encryption  Key Space  $2^{128}$
- 192 bits with 12 rounds of encryption  Key Space  $2^{192}$
- 256 bits with 14 rounds of encryption Key Space  $2^{256}$

## Public key and private key encryption and decryption

**Combine the two processes**
1.Alice encrypts the document with her private key 2.Alice then encrypts again with Bob’s public key
3.Bob decrypts the document with Bob’s private key 4.Bob decrypts the document with Alice’s public key

> [!NOTE]
>
> Can be attacked by **Man-in-the-Middle (MitM)** attack

Eve generates two pairs of privates and public keys.

Eve intercepts the public key exchange between Alice and Bob, 

Eve substitutes her own public keys for Alice's and Bob’s. 

As a result, when Alice and Bob send encrypted messages to each other, they are actually encrypted with Eve's public keys, allowing her to decrypt the messages with her private keys.

## How to Prevent This MitM Attack

To protect against this type of attack, Alice and Bob should use **Public Key Infrastructure (PKI)** and other secure key exchange mechanisms. Here are the steps and techniques to prevent Eve’s MitM attack:

1. **Public Key Infrastructure (PKI)**:
   - **Certificates**: Use digital certificates issued by trusted Certificate Authorities (CAs) to verify the authenticity of public keys. A digital certificate binds a public key to an entity (Alice or Bob) and is signed by a CA.
   - **Certificate Validation**: Before using a public key, both parties should validate the certificate through a CA to ensure it has not been tampered with.
2. **Mutual Authentication**:
   - Both parties should authenticate each other using their certificates before exchanging any encrypted data. This can involve both parties providing and validating each other’s certificates.
3. **Out-of-Band Verification**:
   - Verify public keys through an out-of-band channel (a different communication method that is secure) to ensure that the received public key has not been altered.
4. **Use of Secure Key Exchange Protocols**:
   - **Diffie-Hellman Key Exchange with Authentication (DHKE)**: Combining Diffie-Hellman with digital signatures can ensure that the key exchange process is authenticated and secure.
   - **TLS/SSL**: Implementing communication over TLS (Transport Layer Security) ensures that the connection is secure and the public keys are verified through certificates.

## Public key distribution

**Decentralised models**: PGP, OpenPGP

**Centralised models:** Estonian ID-Card

PGP (Pretty Good Privacy) Phil Zimmerman 1991

1.Uses variety of symmetric and public key ciphers 2.Uses Web of Trust 

Estonian model needs proof of identification (passport, driving license, etc) also can only be collected in person

In 1977,  MIT researchers Ron Rivest, Adi Shamir and Leonard Adleman came up with RSA Key Generation: Create a public and private key. Public key is shared, private key is kept secret

**Encryption:** Encrypt a message to someone with their public key

**Decryption:** Decrypt a message with the private key

## Hash functions

Used for password storage and verification

Password + Salt (random bytes) is hashed and the hash stored for verification
**Never store the plaintext**
Linux stores passwords in a file called shadow:
`openssl passwd -6 -salt randomtext mysecretpassword`
In practice, Linux will do the hash 5000 times in an attempt to stop brute forcing passwords

Message Authentication Codes (MAC): 

1.message is combined with key and hashed 2.confirms that a message has not been changed 3.provides data integrity and authenticity

Digital signature

1.proposed by Diffie and Hellman in 1976 2.Digital Signature Algorithm (DSA) part of NIST’s Digital Signature Standard (DSS)
Message is hashed and then processed using the private key to produce a signature 3.Checking the signature involves taking the hash of the message and the signature and using the public key to verify the signature.

## Q&A

### Why do we salt passwords before hashing them?

Salting passwords before hashing is a critical security practice that addresses several vulnerabilities in storing hashed passwords:

**Prevents Rainbow Table Attacks**:

- Rainbow tables are precomputed tables for reversing cryptographic hash functions, mainly used to crack password hashes. By adding a unique salt to each password before hashing, even if two users have the same password, their hashes will be different. This makes rainbow tables ineffective because each entry in the table would need to be salted in the same way as the stored passwords.

**Mitigates Brute-Force Attacks**:

- Salting passwords increases the computational complexity for attackers trying to perform brute-force attacks. Each password guess would need to be hashed with each unique salt, significantly increasing the time and resources required to crack the hashes.

**Ensures Unique Hashes for Identical Passwords**:

- Without salting, identical passwords would result in identical hashes. This allows attackers to identify users with the same password easily. Salting ensures that identical passwords result in unique hashes, making it harder for attackers to gain useful information.

### Are Hash Functions Secure?

Hash functions are generally secure if they possess the following properties:

1. **Preimage Resistance**:
   - It should be computationally infeasible to reverse the hash function, i.e., given a hash value, it should be hard to find the original input (the preimage).
2. **Second Preimage Resistance**:
   - Given an input and its hash, it should be hard to find a different input that produces the same hash value.
3. **Collision Resistance**:
   - It should be hard to find two different inputs that produce the same hash value.

However, the security of hash functions can be compromised if:

- The hash function is outdated or has known vulnerabilities (e.g., MD5 and SHA-1).
- The implementation is flawed.
- The hash function is used improperly (e.g., without salting passwords).

Modern cryptographic hash functions like SHA-256 and bcrypt, when used correctly (including salting and proper key management), are considered secure for most applications.

### Your Diffie-Hellman Key Exchange Didn’t Work, What Went Wrong?

Diffie-Hellman key exchange is a method of securely exchanging cryptographic keys over a public channel. If it didn’t work, potential issues could include:

1. **Incorrect Prime and Base Selection**:
   - Both parties must agree on a large prime number ppp and a base ggg. These values should be properly chosen to ensure security. If these values are not agreed upon or improperly chosen, the key exchange might fail.
2. **Incorrect Calculation or Communication**:
   - Each party computes their public value to send to the other party. If there are errors in these calculations or in the communication process (e.g., values not transmitted correctly), the key exchange will fail.
3. **Mismatch in Public and Private Keys**:
   - Each party generates a private key and a corresponding public value. If the private keys are not kept secret or the public keys are not correctly used in the calculations, the shared secret will not match.
4. **Man-in-the-Middle Attack**:
   - If an attacker intercepts the public values exchanged between the parties and replaces them with their own, they can establish separate keys with each party, thus compromising the security of the exchange.
5. **Implementation Errors**:
   - Bugs or flaws in the implementation of the Diffie-Hellman algorithm can lead to failures. This includes incorrect handling of large integers or improper usage of cryptographic libraries.

To diagnose and fix issues with Diffie-Hellman key exchange:

- Ensure both parties are using the same prime number ppp and base ggg.
- Verify the correctness of the calculations for the public and shared values.
- Use secure channels for initial parameter exchange if possible.
- Check for possible man-in-the-middle attacks.
- Review the implementation for potential bugs or flaws.

### Safe Use of CBC Mode

**Cipher Block Chaining (CBC) mode** is safe to use under the following conditions:

1. **Unique Initialization Vector (IV)**:
   - Each message should use a unique, unpredictable IV. This ensures that identical plaintext blocks result in different ciphertext blocks, preventing certain types of attacks like pattern analysis.
2. **Proper Padding**:
   - Since CBC operates on fixed-size blocks, the plaintext must be properly padded to the block size. Padding should be done securely to avoid padding oracle attacks.
3. **Integrity Check**:
   - CBC mode does not inherently provide message integrity. It’s important to use a message authentication code (MAC) or another integrity check mechanism to ensure that the ciphertext has not been tampered with.

### n-DES and Security

**n-DES** (Triple DES or other multiple iterations of DES) improves security over single DES due to the following reasons:

1. **Key Length**:
   - Triple DES (3DES) effectively increases the key length to 168 bits (using three 56-bit keys), significantly increasing the complexity and making brute-force attacks infeasible with current technology.
2. **Multiple Encryptions**:
   - By encrypting the data multiple times, n-DES provides stronger security through layered encryption, reducing the risk of certain cryptanalytic attacks that might be effective against single DES.

However, there are limitations:

1. **Performance**:
   - n-DES is slower than single DES due to multiple rounds of encryption and decryption. This can be a concern in performance-sensitive applications.
2. **Compatibility**:
   - As DES is considered obsolete and not secure enough for modern standards, even Triple DES is being phased out in favor of more secure algorithms like AES.
3. **Key Management**:
   - Managing multiple keys securely is more complex and can introduce risks if not handled properly.

### Fully Utilising the Key Space

To fully utilize the key space, the plaintext should exhibit the following properties:

1. **High Entropy**:
   - The plaintext should have high entropy, meaning it should be as random and unpredictable as possible. This prevents patterns in the plaintext that could be exploited by attackers.
2. **Diverse Input**:
   - The plaintext should cover a wide range of possible values. If the plaintext is always within a limited set of values, many potential keys will never be used.
3. **Proper Length**:
   - The plaintext should be long enough to ensure that every possible key influences the ciphertext. If the plaintext is too short, it may not utilize the full key space effectively.

### Adding Substitution and/or Transposition Layers

Adding additional substitution and transposition layers can improve security for the following reasons:

1. **Increased Complexity**:
   - Additional layers make the encryption process more complex, increasing the difficulty for attackers to reverse-engineer the encryption algorithm.
2. **Defense in Depth**:
   - Multiple layers of substitution and transposition provide multiple lines of defense, making it harder for attackers to find vulnerabilities.
3. **Non-linearity**:
   - Substitution adds non-linearity to the encryption process, making it resistant to linear and differential cryptanalysis.
4. **Diffusion**:
   - Transposition improves diffusion, ensuring that changes in the plaintext affect many parts of the ciphertext, spreading the influence of each plaintext bit widely across the ciphertext.

However, it's important to note:

- **Implementation Complexity**:
  - More layers can make the encryption algorithm more complex and harder to implement correctly, increasing the risk of implementation errors.
- **Performance**:
  - Additional layers may reduce performance, making the encryption and decryption processes slower.

If for the Caesar encryption, the substitution and transposition won't have effects.(Because the information entropy doesn't change)

#### Diffie Hellman Vulnerability

Diffie-Hellman is vulnerable to a man in the middle attack (MITM)
An attacker simply inserts themselves into the communication and acts as a proxy 
It is vulnerable because there is no authentication of the parties
Can be mitigated by using signatures as proof of identity