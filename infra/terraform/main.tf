# aws_instance.my-instance:
resource "aws_instance" "my-instance" {
  ami                         = "ami-04542995864e26699"
  instance_type               = "t3.micro"
  associate_public_ip_address = true
  availability_zone           = "eu-north-1a"
  key_name                    = "terraform-key"
  monitoring                  = false
  subnet_id                   = "subnet-0431de7405f531235"
  tags = {
    "Name" = "my-SaaS-instance"
  }

  security_groups = [
    aws_security_group.my_security_group.name,
  ]

  vpc_security_group_ids = [
    aws_security_group.my_security_group.id,
  ]

  root_block_device {
    delete_on_termination = true
    device_name           = "/dev/sda1"
    volume_size           = 8
    volume_type           = "gp2"
    encrypted             = false
  }

  tags_all = {
    "Name" = "my-SaaS-instance"
  }
}

# aws_security_group.my-security-group:
resource "aws_security_group" "my_security_group" {
  name        = "my-security-group"
  description = "Allow HTTP, SSH, and other services"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8443
    to_port     = 8443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 9090
    to_port     = 9090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Grafana"
  }

  ingress {
    from_port   = 9113
    to_port     = 9113
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Nginx Exporter"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "instance_ip" {
  value = aws_instance.my-instance.public_ip
}
