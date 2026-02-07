## 1. Initial Repository Setup

* **Create a New Repository:** Create a new GitHub repository for the project.
* **Share with Instructor:** Set the repository to **private** (or public, though he specifically asks to be added) and add the instructor's username as a collaborator.

## 2. Repository Structure: "Mono-Repo"

The project uses a **mono-repository** approach, meaning both the front-end and back-end code live in the same repository but in separate folders:

* **`client/` folder:** Contains the Next.js/React front-end application.
* **`server/` folder:** Contains the Node.js/Express back-end API.
* **Root Level:** Should contain a `.gitignore` file and a `README.md`.


## 3. Branching Strategy

The instructor defined a specific workflow for managing code changes:

* **`dev` branch:** Use this for all active development. Push your daily work and new features here.
* **`main` branch:** Reserved for **production/deployments**. Only merge code into `main` when it is stable and ready to be hosted on Render.
* **Feature Branches (Optional):** While not strictly required for solo work, he suggested branching out for specific features or fixes as a best practice.


##  4. Commits and Collaboration Standards

To maintain professional standards, the workshop requires:

* **Conventional Commits:** Use a structured format for commit messages (e.g., `feat: add login functionality` or `fix: resolve api timeout`). This helps track whether a change is a feature, a fix, or a breaking change.
* **Frequent, Small Commits:** Do not push massive amounts of code at once. Small commits make it easier to revert changes if something breaks.
* **Pull Requests (PRs):** When a new feature is finished, open a Pull Request to the instructor. He will review the code and provide constructive feedback before you merge it.

## 5. Security and Maintenance

* **`.gitignore`:** Ensure you have a robust gitignore file. Do **not** push build files (like `node_modules` or `.next`) or environment variables.
* **Environment Files (`.env`):** Never commit sensitive keys or passphrases. Instead, provide a `.env.example` file to show which variables are needed without revealing the actual values.
* **Documentation:** Maintain the `README.md` with instructions on how to set up and run your specific version of the project.