provider "aws" {
  region = "eu-north-1"
}

resource "aws_instance" "my-instance" {
  ami             = "ami-04542995864e26699"
  instance_type   = "t3.micro"
  key_name        = "terraform-key"
  security_groups = ["my-security-group"]
  tags = {
    Name = "my-SaaS-instance"
  }
}

resource "aws_security_group" "my-security-group" {
  name        = "my-security-group"
  description = "Allow HTTP and SSH"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "instance_id" {
  value = aws_instance.my-instance.public_ip
}
