Run `gh issue list --state open --json number,title,body,labels` to fetch active issues.
Pick one of them.

Check if the task has implementation plan as a comment. If no plan is there, generate it and post
as a comment to the issue.

Next, implement the plan and create a pull request linked to the ticket.

For city research tasks, use `/research.city <city-name>` to generate a knowledge base article.
For automated tech cleanup of the repo, use `/refactor` — it standardizes and simplifies, then creates a PR.
