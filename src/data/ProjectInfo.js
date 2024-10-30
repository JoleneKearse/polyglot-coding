export const data = [
{
    ticTacToe: {
        title: "Tic Tac Toe",
        mvp: `
          <p>This is a simple Tic Tac Toe game designed as a learning exercise.</p>
          <p>It is a two-player game where each player takes turns to place their mark (X or O) on a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.</p>
        `,
        componentName: "TicTacToe",
        code: {
            python: `
from termcolor import colored

X = "X"
O = "O"

board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]


def cell(mark):
    color = "magenta" if mark == "X" else "yellow"
    return colored(mark, color)


def print_board(board):
    line = "---+---+---"
    print(line)
    for row in board:
        print(f" {cell(row[0])} | {cell(row[1])} | {cell(row[2])}")
        print(line)


def check_winner(board):
    for row in board:
        if row[0] == row[1] == row[2] != " ":
            return True

    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] != " ":
            return True

    # check diagonals
    if board[0][0] == board[1][1] == board[2][2] != " " or board[0][2] == board[1][1] == board[2][0] != " ":
        return True

    return False


def check_tie(board):
    for row in board:
        for col in row:
            if col == " ":
                return False

    return True


def get_position(prompt):
    while True:
        try:
            position = int(input(prompt))
            if position < 0 or position > 2:
                raise ValueError
            return position
        except ValueError:
            print("Invalid input!")


def get_move(current_player):
    print(f"Player {current_player}'s turn")

    while True:
        row = get_position("Enter row (0-2): ")
        col = get_position("Enter column (0-2): ")

        if board[row][col] == " ":
            board[row][col] = current_player
            break

        print("This spot is already taken!")


def main():
    print_board(board)
    current_player = X

    while True:
        get_move(current_player)
        print_board(board)

        winner = check_winner(board)
        if winner:
            print(f"Player {current_player} wins! 🖖")
            break

        if check_tie(board):
            print("It's a tie!")
            break

        current_player = O if current_player == X else X


if __name__ == "__main__":
    main()
            
            `,
        javascript: ` 
            console.log("Tic Tac Toe");
                    `,
        csharp: `
namespace TicTacToe
{
    public enum Dimension
    {
        Row,
        Column
    }
    public class Game
    {
        private string line;
        public char[,] board;
        public char currentPlayer;

        public Game()
        {
            board = new char[3, 3]
            {
            { ' ', ' ', ' ' },
            { ' ', ' ', ' ' },
            { ' ', ' ', ' ' }
            };
            currentPlayer = 'X';
            line = "---+---+---";
        }
        public void PrintBoard()
        {
            Console.WriteLine(line);
            for (int i = 0; i < 3; i++)
            {
                Console.WriteLine($" {board[i, 0]} | {board[i, 1]} | {board[1, 2]}");
                Console.WriteLine(line);
            }
        }

        public int GetPosition(Dimension dimension)
        {
            Console.WriteLine($"Enter {dimension} (0-2): ");
            string input = Console.ReadLine().Trim();
            int num;

            if (!int.TryParse(input, out num) || num < 0 || num > 2)
            {
                Console.WriteLine("Invalid input!");
                return GetPosition(dimension);
            }

            return num;
        }

        public void PlaceMark(int x, int y)
        {
            if (board[x, y] == ' ')
            {
                board[x, y] = currentPlayer;
            }
            else
            {
                Console.WriteLine("This cell is already occupied. Please try again.");
            }
        }

        public void SwitchPlayer()
        {
            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            Console.WriteLine($"Player {currentPlayer}'s turn.");
        }

        public bool CheckWinner(char[,] board)
        {
            for (int i = 0; i < 3; i++)
            {
                if (board[i, 0] != ' ' && board[i, 0] == board[i, 1] && board[i, 1] == board[i, 2])
                {
                    return true;
                }
            }
            for (int i = 0; i < 3; i++)
            {
                if (board[0, i] != ' ' && board[0, i] == board[1, i] && board[1, i] == board[2, i])
                {
                    return true;
                }
            }
            if (board[0, 0] != ' ' && board[0, 0] == board[1, 1] && board[1, 1] == board[2, 2])
            {
                return true;
            }
            if (board[0, 2] != ' ' && board[0, 2] == board[1, 1] && board[1, 1] == board[2, 0])
            {
                return true;
            }
            return false;
        }

        public bool CheckTie(char[,] board)
        {
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    if (board[i, j] == ' ')
                    {
                        return false;
                    }
                }
            }
            return true;
        }
    }
     class Program
    {
        static void Main(string[] args)
        {
            Game game = new Game();
            game.PrintBoard();

            game.currentPlayer = 'X';
            Console.WriteLine($"Player {game.currentPlayer}'s turn.");

            while (true)
            {
                int row = game.GetPosition(Dimension.Row);
                int col = game.GetPosition(Dimension.Column);

                game.PlaceMark(row, col);
                game.PrintBoard();

                bool winner = game.CheckWinner(game.board);
                if (winner)
                {
                    Console.WriteLine($"Player {game.currentPlayer} wins!");
                    break;
                }

                if (game.CheckTie(game.board))
                {
                    Console.WriteLine("It's a tie!");
                    break;
                }
                game.SwitchPlayer();

            }
        }
    }   
}
        `,
        },

    },
    passwordStrengthChecker: {
      title: "Password Strength Checker",
      mvp: `
        <p>This is a very simple password strength checker designed as a learning exercise and <b>should not</b> be used in reality!</p>
        <p>This app checks 5 conditions:</p>
        <ul>
          <li>At least 8 characters long</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          <li>At least one digit </li>
          <li>At least one special character</li>
        </ul>
        <p>For each met condition, one point is added to the strength. Five levels are possible.</p>
      `,
      componentName: "PasswordStrengthChecker",
      code: {
        python: `
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
    if re.search(r"[!@#$%^&*\-_=+?/<>.,:;'\[\]{}]", password):
        strength += 1
    return strength

def main():
    entered_password = input(USER_PROMPT).strip()
    password_strength = test_password_strength(entered_password)
    print(STRENGTH_CODES[password_strength])

if __name__ == "__main__":
    main()
        `,
        javascript: `
const strengthDisplay = document.getElementById('strength-display');
const strengthCodes = ["Not even a password", "Very weak", "Weak", "Medium", "Strong", "Very Strong"];

const testPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    const conditions = [
        /[A-Z]/,
        /[a-z]/,
        /[0-9]/,
        /[!@#$%^&*\\-_=+?/\<>.,:;'\"[\\]{}]/,
    ];
    for (const condition of conditions) {
        if (condition.test(password)) strength++;
    }
    return strength;
};
        `,
        csharp: `
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

        internal int TestPasswordStrength(string password)
        {
            int strength = 0;
            var regexes = new List<Regex>
            {
                new Regex(@"[a-z]"),
                new Regex(@"[A-Z]"),
                new Regex(@"[0-9]"),
                new Regex(@"[!@#$%^&*\\-_=+?/\<>.,:;'\""[\\]{}]")
            };

            if (string.IsNullOrEmpty(password)) return strength;

            if (password.Length >= 8) strength++;

            foreach (var regex in regexes)
            {
                if (regex.IsMatch(password)) strength++;
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
            int passwordStrength = password.TestPasswordStrength(password.UserPassword);
            Console.WriteLine(Password.StrengthCodes[passwordStrength]);
        }
    }
}
        `,
      },
    },
  },
];
