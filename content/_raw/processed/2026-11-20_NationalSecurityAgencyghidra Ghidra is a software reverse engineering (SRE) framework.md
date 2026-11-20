---
title: "NationalSecurityAgency/ghidra: Ghidra is a software reverse engineering (SRE) framework"
source: "https://github.com/NationalSecurityAgency/ghidra"
author:
published:
created: 2026-10-25
description:
tags:
  - "clippings"
---
[![](https://github.com/NationalSecurityAgency/ghidra/raw/master/Ghidra/Features/Base/src/main/resources/images/GHIDRA_3.png)](https://github.com/NationalSecurityAgency/ghidra/blob/master/Ghidra/Features/Base/src/main/resources/images/GHIDRA_3.png)

## Ghidra Software Reverse Engineering Framework

Ghidra is a software reverse engineering (SRE) framework created and maintained by the [National Security Agency](https://www.nsa.gov/) Research Directorate. This framework includes a suite of full-featured, high-end software analysis tools that enable users to analyze compiled code on a variety of platforms including Windows, macOS, and Linux. Capabilities include disassembly, assembly, decompilation, graphing, and scripting, along with hundreds of other features. Ghidra supports a wide variety of processor instruction sets and executable formats and can be run in both user-interactive and automated modes. Users may also develop their own Ghidra extension components and/or scripts using Java or Python.

In support of NSA's Cybersecurity mission, Ghidra was built to solve scaling and teaming problems on complex SRE efforts, and to provide a customizable and extensible SRE research platform. NSA has applied Ghidra SRE capabilities to a variety of problems that involve analyzing malicious code and generating deep insights for SRE analysts who seek a better understanding of potential vulnerabilities in networks and systems.

If you are a U.S. citizen interested in projects like this, to develop Ghidra and other cybersecurity tools for NSA to help protect our nation and its allies, consider applying for a [career with us](https://www.intelligencecareers.gov/nsa).

## Security Warning

**WARNING:** There are known security vulnerabilities within certain versions of Ghidra. Before proceeding, please read through Ghidra's [Security Advisories](https://github.com/NationalSecurityAgency/ghidra/security/advisories) for a better understanding of how you might be impacted.

## Install

To install an official pre-built multi-platform Ghidra release:

- Install [JDK 25 64-bit](https://adoptium.net/temurin/releases)
- Download a Ghidra [release file](https://github.com/NationalSecurityAgency/ghidra/releases)
	- **NOTE:** The official multi-platform release file is named `ghidra_<version>_<release>_<date>.zip` which can be found under the "Assets" drop-down. Downloading either of the files named "Source Code" is not correct for this step.
- Extract the Ghidra release file
	- **NOTE:** Do not extract on top of an existing installation
- Launch Ghidra: `./ghidraRun` (`ghidraRun.bat` for Windows)
	- or launch [PyGhidra](https://github.com/NationalSecurityAgency/ghidra/blob/master/Ghidra/Features/PyGhidra/README.md): `./support/pyghidraRun` (`support\pyghidraRun.bat` for Windows)

For additional information and troubleshooting tips about installing and running a Ghidra release, please refer to the [Getting Started](https://github.com/NationalSecurityAgency/ghidra/blob/master/GhidraDocs/GettingStarted.md) document which can be found at the root of a Ghidra installation directory.

## Build

To create the latest development build for your platform from this source repository:

##### Install build tools:

- [JDK 25 64-bit](https://adoptium.net/temurin/releases)
- [Gradle 9.1.0+](https://gradle.org/releases/) (or provided Gradle wrapper if Internet connection is available)
- [Python3](https://www.python.org/downloads/) (version 3.9 to 3.15) with bundled pip
- GCC or Clang, and make (Linux/macOS-only)
- [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs/community/) 2017+ or [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) with the following components installed (Windows-only):
	- MSVC
		- Windows SDK
		- C++ ATL

##### Download and extract the source:

[Download from GitHub](https://github.com/NationalSecurityAgency/ghidra/archive/refs/heads/master.zip)

```
unzip ghidra-master
cd ghidra-master
```

**NOTE:** Instead of downloading the compressed source, you may instead want to clone the GitHub repository: `git clone https://github.com/NationalSecurityAgency/ghidra.git`

##### Download additional build dependencies into source repository:

**NOTE:** If an Internet connection is available and you did not install Gradle, the `./gradlew` (or `gradlew.bat`) command may be used in place of the `gradle` command in the following instructions.

```
gradle -I gradle/support/fetchDependencies.gradle
```

##### Create development build:

```
gradle buildGhidra
```

The compressed development build will be located at `build/dist/`.

For more detailed information on building Ghidra, please read the [Developer's Guide](https://github.com/NationalSecurityAgency/ghidra/blob/master/DevGuide.md).

For issues building, please check the [Known Issues](https://github.com/NationalSecurityAgency/ghidra/blob/master/DevGuide.md#known-issues) section for possible solutions.

## Develop

### User Scripts and Extensions

Ghidra installations support users writing custom scripts and extensions via the *GhidraDev* plugin for Eclipse. The plugin and its corresponding instructions can be found within a Ghidra release at `Extensions/Eclipse/GhidraDev/` or at [this link](https://github.com/NationalSecurityAgency/ghidra/blob/master/GhidraBuild/EclipsePlugins/GhidraDev/GhidraDevPlugin/README.md). Alternatively, Visual Studio Code may be used to edit scripts by clicking the Visual Studio Code icon in the Script Manager. Fully-featured Visual Studio Code projects can be created from a Ghidra CodeBrowser window at *Tools -> Create VSCode Module project*.

**NOTE:** Both the *GhidraDev* plugin for Eclipse and Visual Studio Code integrations only support developing against fully built Ghidra installations which can be downloaded from the [Releases](https://github.com/NationalSecurityAgency/ghidra/releases) page.

### Advanced Development

To develop the Ghidra tool itself, it is highly recommended to use Eclipse, which the Ghidra development process has been highly customized for.

##### Install build and development tools:

- Follow the above [build instructions](#build) so the build completes without errors
- Install [Eclipse IDE for Java Developers](https://www.eclipse.org/downloads/packages/)

##### Prepare the development environment:

```
gradle prepdev eclipse buildNatives
```

##### Import Ghidra projects into Eclipse:

- *File* -> *Import...*
- *General* | *Existing Projects into Workspace*
- Select root directory to be your downloaded or cloned ghidra source repository
- Check *Search for nested projects*
- Click *Finish*

When Eclipse finishes building the projects, Ghidra can be launched and debugged with the provided **Ghidra** Eclipse *run configuration*.

For more detailed information on developing Ghidra, please read the [Developer's Guide](https://github.com/NationalSecurityAgency/ghidra/blob/master/DevGuide.md).

## Contribute

If you would like to contribute bug fixes, improvements, and new features back to Ghidra, please take a look at our [Contributor's Guide](https://github.com/NationalSecurityAgency/ghidra/blob/master/CONTRIBUTING.md) to see how you can participate in this open source project.