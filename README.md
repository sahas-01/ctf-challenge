### Aim:
Given a string, solve the CTF

### Process:

- decoded the given base64 to string, got redirected to <a href="https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/ramp-challenge-instructions/" rel="noreferrer" target="__blank">this link</a>
- went to the given url and saw a huge text which happened to be markdown, which I viewed using a markdown tool
- upon reading the instructions in the markdown, opened link in the first point, which took me to <a href="https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge" rel="noreferrer" target="__blank">this link</a> which said Capture the Flag
- As per the instructions and the given pattern, read the instructions carefully, viewed the page source and inspected the html, took it to a file offline for further inspection
- In my html file online(worth about 1000 lines), started matching the DOM with the given pattern.
- Discarded all those which DOM elements that did not match the given pattern
- Here's how I did the matching for each html tag(the brute force approach):
  - checked section with starting data-id="92".
  - if the above matched, move to the next step to match article ending with data-class="45".
  - if above matched, move to the next step to match div with data-tag="78" where 78 need to be present continuously in sequence anywhere.
  - if above matched, next step was to match b with class="ref" and that had the value as well
  - kept appending values into a string that matched the above given conditions, then eventually, got a URL. 
- On opening the URL, I was greeted with a text called uplifts.
- I then proceeded to follow the instructions in the markdown, made this Sandbox environment(which is an unlisted link, hence only those with this link can see).
- Although, I tried to use assistance from LLMs during the completion of this process, I would say that it failed miserably,and I had to step in and figure out a way to deal with displaying the flag in the specified format on the UI.


### Output:
Source code for the final code is this repository
