import Code from "./Code"
import PasswordStrengthChecker from "./projects/PasswordStrengthChecker"

const Project = ({ title, }) => {
  const pythonCode = 
    `
# Python

import re

USER_PROMPT = "Enter a password: "
STRENGTH_CODES = ["No password provided!", "Very weak", "Weak", "Medium", "Strong", "Very Strong"]


def test_password_strength(password):
  strength = 0 
  if len(password) >= 8:
    strength += 1
  if re.search("[A-Z]", password):
    strength += 1
  if re.search("[a-z]", password):
    strength += 1
  if re.search("[0-9]", password):
    strength += 1
  if re.search(r"[!@#$%^&*\-_=+?/\<>.,:;'\"[\]{}]", password):
    strength += 1
  return strength

def main():
  entered_password = input(USER_PROMPT).strip()
  password_strength = test_password_strength(entered_password)
  print(STRENGTH_CODES[password_strength])
  


if __name__ == "__main__":
  main()`;
  const jsCode = `
  // JavaScript
  const strengthDisplay = document.getElementById('strength-display');
  const strengthCodes = ["Not even a password", "Very weak", "Weak", "Medium", "Strong", "Very Strong"];

  const testPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    const conditions = [
      /[A-Z]/,
      /[a-z]/,
      /[0-9]/,
      /[!@#$%^&*\-_=+?/\<>.,:;'\"[\]{}]/,
    ];
    for (const condition of conditions) {
      if (condition.test(password)) strength++;
    };
    return strength;
  }
  `
  const csharpCode = `
  // C#
  using System;
  using System.Collections.Generic;
  using System.Text.RegularExpressions;

  namespace PasswordStrengthChecker
{
    internal class Password
    {
        public const string Prompt = "Enter a password: ";
        public static readonly List<string> StrengthCodes = new List<string> { "No password", "Very weak", "Weak", "Medium", "Strong", "Very strong" };
        internal string UserPassword { get; set; }

        internal int TestPasswordStrenth(string password)
        {
            int strength = 0;
            var regexes = new List<Regex>
            {
                new Regex(@"[a-z]"),
                new Regex(@"[A-Z]"),
                new Regex(@"[0-9]"),
                new Regex(@"[!@#$%^&*\-_=+?/\<>.,:;'\""[\]{}\]]")
            };

            if (string.IsNullOrEmpty(password))
            {
                return strength;
            }

            if (password.Length >= 8)
            {
                strength++;
            }
            foreach (var regex in regexes)
            {
                if (regex.IsMatch(password))
                {
                    strength++;
                }
            }

            return strength;
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Password password = new Password();
            Console.Write(Password.Prompt);
            password.UserPassword = Console.ReadLine();
            int passwordStrength = password.TestPasswordStrenth(password.UserPassword);
/
            Console.WriteLine(Password.StrengthCodes[passwordStrength]);
        }
    }
}
  `
  return (
    <article>
      <div className="project-information">
        <div className="project">
          <h3>{title}</h3>
          <div className="text-box">
            <h4>MVP</h4>
            <p>This is a very simple password strength checker designed as a learning exercise and <b>should not</b> not be used in reality!</p>
            <p>This app checks 5 conditions:</p>
            <ul>
              <li>At least 8 characters long</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one digit </li>
              <li>At least one special character</li>
            </ul>
            <p>For each met condition one point is added to the strength. Five levels are possible.</p>
          </div>
        </div>
        <div className="web">
          <PasswordStrengthChecker />
        </div>
      </div>
      <div className="project-code">
        <Code 
          language="python"
          code={pythonCode} 
        />
        <Code 
          language="javascript"
          code={jsCode} 
        />
        <Code 
          language="csharp"
          code={csharpCode} 
        />

      </div>
    </article>
  )
}

export default Project