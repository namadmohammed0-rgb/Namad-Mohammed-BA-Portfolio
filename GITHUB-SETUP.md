# Manual GitHub setup and push

1. On GitHub, select **New repository**.
2. Set the repository name to `Namad-Mohammed-BA-Portfolio`.
3. Choose Public or Private. Do not initialize with a README, `.gitignore`, or license because this package already contains them.
4. Copy the repository HTTPS URL.
5. In a terminal, enter the `namad-portfolio` folder from this package and run:

```bash
git init
git branch -M main
git add .
git commit -m "Create Namad Mohammed BA portfolio"
git remote add origin https://github.com/YOUR-USERNAME/Namad-Mohammed-BA-Portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git asks for a password, use a GitHub Personal Access Token instead of your account password.

## Optional: include the exports

Copy the files from `portfolio-exports/` into the repository root if you want the standalone HTML, PDF, and QR image stored alongside the React project:

```bash
cp ../portfolio-exports/* .
git add .
git commit -m "Add portfolio exports and QR code"
git push
```

The deployable website source is inside `namad-portfolio/`.
