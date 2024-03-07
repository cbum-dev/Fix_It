import React, { useState } from "react";

const projects = [
  {
    description: "Scalable geometric and statistical software",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/geomscale/ongpste986nd7t6p-360.png",
    name: "GeomScale",
    technologies: ["python", "c++", "r", "jupyter", "github-actions"],
    url: "https://geomscale.github.io",
  },
  {
    description: "Cross-platform 3D parametric modeler",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/freecad/lrtbrjr9zjdmhoyd-360.png",
    name: "FreeCAD",
    technologies: ["python", "c++", "qt", "OpenCASCADE", "OpenInventor"],
    url: "https://freecad.org",
  },
  {
    description: "Open access genomics and bioinformatics projects",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/open-genome-informatics/p6nhalhjwargwd5s-360.png",
    name: "Open Genome Informatics",
    technologies: ["python", "react", "r-project", "graph", "angular"],
    url: "http://gmod.org/wiki/GSoC",
  },
  {
    description: "The SSH library",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/libssh/kcfc8lhxh3uyozbu-360.png",
    name: "libssh",
    technologies: ["c", "ci", "ssh"],
    url: "https://www.libssh.org/",
  },
  {
    description: "A diverse and sustainable free software desktop.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gnome-foundation/aqwqx1x6ozjnxsak-360.png",
    name: "GNOME Foundation",
    technologies: ["c", "linux", "rust", "gtk", "Flatpak"],
    url: "https://gnome.org",
  },
  {
    description: "Stream Processing for Operational Analytics",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mantis/qvsvnpozgrydjrxi-360.png",
    name: "Mantis",
    technologies: ["java", "Rxjava", "Akka", "Netty"],
    url: "https://netflix.github.io/mantis/",
  },
  {
    description: "Toolkit for developing Robotics applications",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/jderobot/xwu8zkcagffmlqdj-360.png",
    name: "JdeRobot",
    technologies: ["python", "ros", "gazebo", "opencv", "tensorflow"],
    url: "http://jderobot.github.io",
  },
  {
    description: "Defend yourself against tracking and surveillance.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-tor-project/1w40vc9lqddvbfoa-360.png",
    name: "The Tor Project",
    technologies: ["c", "python", "web", "rust"],
    url: "https://www.torproject.org/",
  },
  {
    description: "The Global Open Source Foundation",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/eclipse-foundation/bzwgughr99c0glpa-360.png",
    name: "Eclipse Foundation",
    technologies: [
      "java",
      "che",
      "deeplearning",
      "eclipsejavaide",
      "jakartaee",
    ],
    url: "https://www.eclipse.org/",
  },
  {
    description: "The Most Advanced Open Source Relational Database",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/postgresql/hj9srl9x0o6iendy-360.png",
    name: "PostgreSQL",
    technologies: ["c", "python", "postgresql", "javascript", "sql"],
    url: "https://postgresql.org",
  },
  {
    description:
      "X Window System and related projects (Mesa, DRI, Wayland, etc.)",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/xorg-foundation/g3sbklva7h1ksltv-360.png",
    name: "X.Org Foundation",
    technologies: ["opengl", "vulkan", "x11", "wayland", "DRM"],
    url: "https://www.x.org",
  },
  {
    description: "Umbrella for Particle Physics-related projects",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/cern-hsf/cjus658sjzba5zhg-360.png",
    name: "CERN-HSF",
    technologies: [
      "python",
      "c/c++",
      "data analysis",
      "artificial intelligence",
      "container orchestration",
    ],
    url: "http://hepsoftwarefoundation.org/activities/gsoc.html",
  },
  {
    description: "Modern team chat app designed for efficiency.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/zulip/sx5ruvwv6nyugbk7-360.png",
    name: "Zulip",
    technologies: ["python", "django", "css", "typescript", "electron"],
    url: "https://zulip.com/",
  },
  {
    description: "An open & FAIR neuroscience standards organization",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/incf/gnryoa8kunjogh9a-360.png",
    name: "INCF",
    technologies: ["python", "javascript", "java", "c++", "gpu"],
    url: "https://www.incf.org",
  },
  {
    description: "Fast, seamless, safe, and reliable web for all",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/chromium-lj/qiwhezblvq2a0jgc-360.png",
    name: "Chromium",
    technologies: ["python", "javascript", "java", "c++", "git"],
    url: "https://chromium.org",
  },
  {
    description: "Open Source Multimedia for everyone!",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/videolan/9h28hsncvrt01voz-360.png",
    name: "VideoLAN",
    technologies: ["c", "c++", "qt", "assembly", "video"],
    url: "https://www.videolan.org",
  },
  {
    description: "A programming language used for science & more",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/python-software-foundation/2vpxhpvcsvgyx3kg-360.png",
    name: "Python Software Foundation",
    technologies: ["python", "javascript", "c++", "SBOM"],
    url: "https://python-gsoc.org/",
  },
  {
    description: "Cockpit is an interactive server admin interface",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/cockpit-project/znjdaamdoskwijzj-360.png",
    name: "Cockpit Project",
    technologies: ["python", "javascript", "react"],
    url: "https://cockpit-project.org/",
  },
  {
    description: "Building sustainable ecosystems for cloud native",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/cncf/jmxijrttlucfutel-360.png",
    name: "CNCF",
    technologies: ["prometheus", "kubernetes", "OpenTelemetry", "envoy"],
    url: "https://cncf.io",
  },
  {
    description: "Rizin reverse engineering framework and toolset",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/rizin/7ageygqfyv7wzlee-360.png",
    name: "Rizin",
    technologies: ["c", "python", "go", "c++", "qt"],
    url: "https://rizin.re",
  },
  {
    description: "A Fast and Secure Unikernel SDK",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/unikraft/5nx7anuq3iixdm54.png",
    name: "Unikraft",
    technologies: ["c", "xen", "golang", "kvm", "assembly language"],
    url: "https://unikraft.org/",
  },
  {
    description: "Operating system that targets personal computing.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/haiku/lnrgd3agfl2kogbo-360.png",
    name: "Haiku",
    technologies: ["c++", "posix", "unix"],
    url: "https://www.haiku-os.org",
  },
  {
    description: "Developing open source tools for network biology",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/national-resource-for-network-biology-nrnb/5uobjboaxnzrxyoj-360.png",
    name: "National Resource for Network Biology (NRNB)",
    technologies: ["python", "javascript", "java", "xml", "r"],
    url: "https://nrnb.org/gsoc.html",
  },
  {
    description: "Brings free educational content to the world",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/wikimedia-foundation/yvnsycqzdblh63kt-360.png",
    name: "Wikimedia Foundation",
    technologies: ["python", "javascript", "html", "php", "css"],
    url: "http://wikimediafoundation.org/",
  },
  {
    description: "Of course it runs NetBSD",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-netbsd-foundation/gi3vozsqpecopqku-360.png",
    name: "The NetBSD Foundation",
    technologies: ["c", "shell script", "make", "unix", "bsd"],
    url: "https://www.NetBSD.org/",
  },
  {
    description: "The free & open software radio ecosystem",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gnu-radio/v1g5y6exzlwgfulv-360.png",
    name: "GNU Radio",
    technologies: ["python", "c++", "qt", "simd"],
    url: "https://www.gnuradio.org",
  },
  {
    description: "Multimodal AI from the community, for everyone",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/jina-ai-sb/fzfhdw1ifhstruln-360.png",
    name: "Jina AI",
    technologies: [
      "python",
      "machine learning",
      "microservices",
      "data science",
      "Multimodel AI",
    ],
    url: "https://jina.ai/",
  },
  {
    description: "Open source machine emulator and virtualizer",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/qemu/gik5gsxljb3j1jx1-360.png",
    name: "QEMU",
    technologies: ["c", "python", "linux", "rust"],
    url: "https://qemu.org/",
  },
  {
    description: "Open-source 2D animation software",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/synfig/ohcj3eigerib4jym-360.png",
    name: "Synfig",
    technologies: ["python", "c++", "gtk", "gtkmm"],
    url: "https://synfig.org",
  },
  {
    description: "Make AI inference faster and easier to deploy!",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/openvino-toolkit/ivzvok335ujezk2z-360.png",
    name: "OpenVINO Toolkit",
    technologies: ["python", "c++", "x86"],
    url: "https://docs.openvino.ai/",
  },
  {
    description: "Offline maps app for tourists, cyclers & hikers",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/organic-maps/cnhed0elppzqsjut-360.png",
    name: "Organic Maps",
    technologies: ["android", "java", "c++", "ios", "OpenStreetMap"],
    url: "https://organicmaps.app",
  },
  {
    description: "Exploring supernovae made easy",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/tardis-rt-collaboration/0ocxr3jw3fwdloye-360.png",
    name: "TARDIS RT Collaboration",
    technologies: ["python", "numba", "numpy", "jupyter", "pandas"],
    url: "https://tardis-sn.github.io",
  },
  {
    description: "Build and learn logic circuits in the cloud!",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/circuitverseorg/rxan5pn96f3m4yfu-360.png",
    name: "CircuitVerse.org",
    technologies: ["javascript", "rails", "canvas"],
    url: "http://circuitverse.org/",
  },
  {
    description: "The best open source digital experience platform",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/drupal-association/kfbn4ws0uftixkho-360.png",
    name: "Drupal Association",
    technologies: ["mysql", "javascript", "html", "php", "symfony"],
    url: "https://drupal.org",
  },
  {
    description: "Fast, secure and flexible BIOS firmware",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/coreboot/aq8ne4b9ot7xq8rz-360.png",
    name: "coreboot",
    technologies: ["c", "assembly", "arm", "x86"],
    url: "https://coreboot.org",
  },
  {
    description: "Internet content available offline.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/kiwix/b6zuffwiyoulh0ku-360.png",
    name: "Kiwix",
    technologies: ["python", "perl", "c++", "nodejs", "kotlin"],
    url: "https://www.kiwix.org",
  },
  {
    description: "Chekpoint/Restore for Linux tasks and containers",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/criu/ypjxpancpwtdf698-360.png",
    name: "CRIU",
    technologies: ["c", "python", "linux", "go"],
    url: "https://criu.org",
  },
  {
    description: "The Future of Storage",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/ceph/rvqqprqtyq0rfrcc-360.png",
    name: "Ceph",
    technologies: ["python", "javascript", "c++"],
    url: "https://ceph.io/en/",
  },
  {
    description: "The fastest growing Open Source Database",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mariadb/0nbzguld3ntsgeqv-360.png",
    name: "MariaDB",
    technologies: ["python", "javascript", "c/c++", "perl", "databases"],
    url: "https://mariadb.org",
  },
  {
    description: "The Future is API-First",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/postman/iw5h0aed8pe5yind-360.png",
    name: "Postman",
    technologies: ["javascript", "api", "openapi", "AsyncAPI", "JSON Schema"],
    url: "https://postman.com",
  },
  {
    description: "Using machine learning and security to help others",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/stratosphere-laboratory-czech-technical-university-in-prague/94v2dwoajljheoba-360.png",
    name: "Stratosphere Laboratory, Czech Technical University in Prague",
    technologies: ["python", "javascript", "redis", "flask", "docker"],
    url: "https://www.stratosphereips.org/",
  },
  {
    description: "Homework Autograding and Course Management Tools",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/submitty/jlpoxlj2rvpot6zv-360.png",
    name: "Submitty",
    technologies: ["python", "postgresql", "javascript", "c++", "php"],
    url: "https://submitty.org",
  },
  {
    description: "The Open Source Geospatial Foundation",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/osgeo-open-source-geospatial-foundation/yundulx00fbd1akm-360.png",
    name: "OSGeo (Open Source Geospatial Foundation)",
    technologies: ["c", "python", "javascript", "java", "c++"],
    url: "https://www.osgeo.org/",
  },
  {
    description: "Universal Access to All Knowledge",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/internet-archive/uzbgzbb9tvp81c2i.png",
    name: "Internet Archive",
    technologies: ["python", "javascript", "go", "elasticsearch", "hadoop"],
    url: "http://archive.org",
  },
  {
    description: "Provide an open source camera stack for linux",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/libcamera/p4cgbqxrhkw3igiv-360.png",
    name: "libcamera",
    technologies: ["c/c++", "linux kernel", "qt5", "gstreamer", "v4l2"],
    url: "https://libcamera.org",
  },
  {
    description: "C++ library of computational geometry",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/cgal-project/9ubuadbe0eg5xfcw-360.png",
    name: "CGAL Project",
    technologies: ["c++", "qt"],
    url: "https://www.cgal.org",
  },
  {
    description: "No more insecure software.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/owasp-foundation/haks8qbp0yvjvzge-360.png",
    name: "OWASP Foundation",
    technologies: ["python", "javascript", "java", "ZAP", "Juice Shop"],
    url: "https://owasp.org",
  },
  {
    description: "Non-profit consortium fostering growth of Linux",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-linux-foundation/ydeu9rliawhe6of9-360.png",
    name: "The Linux Foundation",
    technologies: ["c", "linux", "c++", "cups", "ipp"],
    url: "http://www.linuxfoundation.org/",
  },
  {
    description: "E2E test generation and mocking toolkit",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/keploy/txoec8qr8fyegtmv-360.png",
    name: "Keploy",
    technologies: ["java", "golang", "node", "MERN", "epbf"],
    url: "https://keploy.io",
  },
  {
    description: "Moving robots into the future",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/moveit/zmatlwnrrfqcdsjo-360.png",
    name: "MoveIt",
    technologies: ["ros", "c++"],
    url: "https://moveit.ros.org",
  },
  {
    description: "Building a virtualization API for Kubernetes",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/kubevirt/pqdi8ojm0atxoo1s-360.png",
    name: "KubeVirt",
    technologies: ["golang", "grpc"],
    url: "https://kubevirt.io",
  },
  {
    description: "Simplifying the embedding of programming languages",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/metacall/rezoq3uue7dpdzw5-360.png",
    name: "MetaCall",
    technologies: ["python", "c++", "rust", "nodejs", "docker"],
    url: "https://metacall.io",
  },
  {
    description: "Webapp providing a UX-first interface to databases",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mathesar/v96apwcwn80c3uch-360.png",
    name: "Mathesar",
    technologies: ["python", "postgresql", "javascript", "django", "svelte"],
    url: "https://mathesar.org/",
  },
  {
    description: "ns-3 is a simulation tool for computer networks.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-ns-3-network-simulator-project/0zmaec44y4jcfuj2-360.png",
    name: "The ns-3 Network Simulator Project",
    technologies: ["python", "django", "c++"],
    url: "https://www.nsnam.org",
  },
  {
    description: "GIMP is a cross-platform image editor",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gnu-image-manipulation-program/n73ytwpnna15tra2-360.png",
    name: "GNU Image Manipulation Program",
    technologies: ["c", "GEGL"],
    url: "https://www.gimp.org/",
  },
  {
    description: "Open hardware computing for educators and makers",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/beagleboardorg/4w6td6bjy31ei9v2-360.png",
    name: "BeagleBoard.org",
    technologies: ["linux", "fpga", "risc-v", "dsp", "Zephyr RTOS"],
    url: "https://beagleboard.org",
  },
  {
    description: "High-performance computing for clusters and clouds",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/scalable-parallel-computing-laboratory/cho0tqlhmykehqlw-360.png",
    name: "Scalable Parallel Computing Laboratory",
    technologies: ["python", "c++", "mpi", "aws", "Serverless"],
    url: "https://spcl.inf.ethz.ch/",
  },
  {
    description: "Modern and innovative programming language",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/pharo-consortium/zrxygkl3ycuvw6nb-360.png",
    name: "Pharo Consortium",
    technologies: ["git", "smalltalk", "roassal", "pharo", "SUnit"],
    url: "https://pharo.org/",
  },
  {
    description: "LibreOffice is a free and open source office suite",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/libreoffice/3g60m1gvsyzwzvvk-360.png",
    name: "LibreOffice",
    technologies: ["python", "java", "c++"],
    url: "https://www.libreoffice.org/",
  },
  {
    description: "GNU compilers",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gnu-compiler-collection-gcc/kpspl59nyj0hoxlr-360.png",
    name: "GNU Compiler Collection (GCC)",
    technologies: ["c/c++", "gnu make", "gnu autotools"],
    url: "https://gcc.gnu.org/",
  },
  {
    description: "State of the art fuzzing for better security",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/aflplusplus/dw8yelaswljerorz-360.png",
    name: "AFLplusplus",
    technologies: ["llvm", "rust", "fuzzing", "qemu"],
    url: "https://aflplus.plus",
  },
  {
    description: "The Advanced Open Source Enterprise Wiki",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/xwiki/ea9akuy6esnffmuk-360.png",
    name: "XWiki",
    technologies: ["javascript", "java", "html5", "css3", "velocity"],
    url: "https://www.xwiki.org/",
  },
  {
    description: "Amplifying Research Impact through Open Source",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/center-for-research-in-open-source-software-cross/ndbkr7fqcqp4nguq-360.png",
    name: "UC OSPO",
    technologies: ["python", "c/c++", "visualization", "VLSI", "ros/gazebo"],
    url: "https://ospo.ucsc.edu/osre",
  },
  {
    description: "Fast,Scalable,Distributed revision control system",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/git/mbqqznjbaohwgq80-360.png",
    name: "Git",
    technologies: ["shell script", "git", "c language"],
    url: "https://git-scm.com/",
  },
  {
    description: "Domain specific language for audio",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/grame/joff5sziiuapvits-360.png",
    name: "GRAME",
    technologies: ["c", "python", "javascript", "c++", "typescript"],
    url: "https://faust.grame.fr",
  },
  {
    description: "Makers' choice for sysadmins, developers & users",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/opensuse-project/zq11ebxj038xotbe-360.png",
    name: "openSUSE Project",
    technologies: ["python", "ruby", "perl", "rust", "reactjs javascript"],
    url: "https://get.opensuse.org/",
  },
  {
    description: "Anyone can build apps with global impact.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mit-app-inventor/8ppq0spvr3j3gx8q-360.png",
    name: "MIT App Inventor",
    technologies: ["javascript", "java", "gwt", "swift"],
    url: "http://appinventor.mit.edu",
  },
  {
    description: "The Freedom to Create",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/blender-foundation/vdfgx9yyygdjjvym-360.png",
    name: "Blender Foundation",
    technologies: ["c", "python", "opengl", "c++", "vulkan"],
    url: "https://www.blender.org",
  },
  {
    description: "Research on Multimodal Communication",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/red-hen-lab/ugdzrslbomp6lacy-360.png",
    name: "Red Hen Lab",
    technologies: [
      "python",
      "machine learning",
      "computer vision",
      "nlp",
      "data science",
    ],
    url: "http://www.redhenlab.org",
  },
  {
    description: "We develop genomics tools to benefit human health",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/global-alliance-for-genomics-and-health/0bnlmihuhff098xd-360.png",
    name: "Global Alliance for Genomics and Health",
    technologies: ["python", "postgresql", "java", "react", "rust"],
    url: "https://ga4gh.org",
  },
  {
    description: "3D Medical visualization and neuronavigation tool",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/invesalius/ktlk8dmldhfmlyb2-360.png",
    name: "Invesalius",
    technologies: ["python", "cython", "numpy", "dicom", "Vtk"],
    url: "https://invesalius.github.io/",
  },
  {
    description: "Open CS Education as a catalyst for social change",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/omegaup/uvgilx7vyspavjox-360.png",
    name: "omegaUp",
    technologies: ["python", "mysql", "php", "typescript", "vue.js"],
    url: "https://omegaup.org",
  },
  {
    description: "Realtime Audio/Visual Programming Environment",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/purr-data/vb8l0binls5gjdqp-360.png",
    name: "Purr Data",
    technologies: ["c", "javascript", "html5", "Emscripten"],
    url: "https://www.purrdata.net/",
  },
  {
    description: "NumFOCUS promotes open source scientific software.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/numfocus/wimcwc2v6kjlidqc-360.png",
    name: "NumFOCUS",
    technologies: ["python", "c++", "r", "julia"],
    url: "https://numfocus.org",
  },
  {
    description: "World's most advanced autonomous vehicle software",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/ardupilot/oveqvcxkpgkuv8wq-360.png",
    name: "ArduPilot",
    technologies: ["python", "lua", "c++", "pixhawk"],
    url: "https://ardupilot.org/",
  },
  {
    description: "International team developing Open Source software",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/kde-community/1mbnnsqwd2ejcmy8-360.png",
    name: "KDE Community",
    technologies: ["c++", "qt", "qml", "data structures"],
    url: "https://kde.org/",
  },
  {
    description: "Shaping a Scalable Future",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/stear-group/sebxbtinyakvrevb-360.png",
    name: "Ste||ar group",
    technologies: ["c++", "hpc"],
    url: "http://stellar-group.org/",
  },
  {
    description: "++ beneficial uses of computer vision in society",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/opencv/fmh9fnybaz97kodm-360.png",
    name: "OpenCV",
    technologies: ["python", "c++", "deep learning", "ai"],
    url: "https://opencv.org/",
  },
  {
    description: "a fast, flexible machine learning library",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mlpack/gs9xn22l8vefyvhh-360.png",
    name: "mlpack",
    technologies: ["c++", "C++ template metaprogramming"],
    url: "https://www.mlpack.org",
  },
  {
    description: "Vector Search Database for the new AI generation.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/qdrant/73jgnlygoyu6ibia-360.png",
    name: "Qdrant",
    technologies: ["python", "javascript", "rust"],
    url: "https://qdrant.tech",
  },
  {
    description: "Look at the Universe with the power of open source",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/openastronomy/3wvadxwxjc2arepg-360.png",
    name: "OpenAstronomy",
    technologies: ["c", "python", "julia"],
    url: "https://openastronomy.org/",
  },
  {
    description: "TV, Rust, Flutter, Linux, VR and C. In any order.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/ccextractor-development/xjqt8fksfnyqyqrd-360.png",
    name: "CCExtractor Development",
    technologies: ["c", "linux", "rust", "flutter"],
    url: "https://www.ccextractor.org",
  },
  {
    description: "An experimental successor to C++",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/carbon-language/gsrd8pzheipwksw8-360.png",
    name: "Carbon Language",
    technologies: ["llvm", "c++", "clang", "Bison"],
    url: "https://github.com/carbon-language/carbon-lang",
  },
  {
    description: "Dart is a client language for apps on any platform",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/dart/hsghljw4m6popf0x-360.png",
    name: "Dart",
    technologies: ["flutter", "dart"],
    url: "https://dart.dev",
  },
  {
    description: "Development of open source robotics",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/open-robotics/6pg3nwfpieq1qmqw-360.png",
    name: "Open Robotics",
    technologies: ["ros", "gazebo", "ignition", "Open-RMF"],
    url: "https://www.openrobotics.org/",
  },
  {
    description: "High-performance parallel programming language",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/fortran-lang/ay9se7mc6vgdwgbn-360.png",
    name: "Fortran-lang",
    technologies: ["python", "c++", "fortran"],
    url: "https://fortran-lang.org",
  },
  {
    description: "Develop and promote tools for ecosystem modeling",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/pecan-project/kijyzllr7r1g0ukz-360.png",
    name: "PEcAn Project",
    technologies: ["r", "docker", "api", "geospatial"],
    url: "https://pecanproject.github.io/",
  },
  {
    description: "A free rapid game development environment.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-enigma-team/ipdbzf7owbf34bdr-360.png",
    name: "The ENIGMA Team",
    technologies: ["opengl", "c++", "qt5"],
    url: "https://enigma-dev.org",
  },
  {
    description: "Providing freely accessible genomic data",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/genome-assembly-and-annotation/fbu2s36u7uatdgev-360.png",
    name: "Genome Assembly and Annotation",
    technologies: ["python", "mysql", "docker", "pytorch", "nextflow"],
    url: "https://www.ebi.ac.uk/",
  },
  {
    description: "Free Your Numbers",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gnu-octave/0kc85jo6rl3eo2g0-360.png",
    name: "GNU Octave",
    technologies: ["c++", "hg"],
    url: "https://www.octave.org",
  },
  {
    description: "End Poverty One Line of Code at a Time",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-mifos-initiative/etmiqn0lkvfxvm5p-360.png",
    name: "The Mifos Initiative",
    technologies: ["android", "java", "kotlin", "spring", "angular"],
    url: "https://mifos.org",
  },
  {
    description: "Adventure and RPG preservation project",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/scummvm/bnok4srtehdy3fbj-360.png",
    name: "ScummVM",
    technologies: ["opengl", "lua", "c++", "assembly", "sdl"],
    url: "https://www.scummvm.org/",
  },
  {
    description: "To empower all people to learn to program",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/processing-foundation/xr2sncljbvtlop1n-360.png",
    name: "Processing Foundation",
    technologies: ["python", "javascript", "android", "java", "opengl"],
    url: "http://processingfoundation.org",
  },
  {
    description: "Industry leading malware analysis",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/flare/6so0wjs76qeewe9v-360.png",
    name: "FLARE",
    technologies: ["python", "ida-pro", "Ghidra"],
    url: "https://www.mandiant.com/",
  },
  {
    description: "Fast, safe, and expressive programming language",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/swift/moutmu5fv3rozvrz-360.png",
    name: "Swift",
    technologies: ["c++", "cmake", "swift"],
    url: "https://swift.org",
  },
  {
    description: "An open ISO standard for SBOMs",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/spdx/ggw7mdbriw97mzmu-360.png",
    name: "SPDX",
    technologies: ["python", "java", "json", "go", "rdf"],
    url: "https://spdx.dev",
  },
  {
    description: "Nonprofit building a global digital commons.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/creative-commons/jvj0y3czaagpnhvz-360.png",
    name: "Creative Commons",
    technologies: ["python", "javascript", "php", "css", "wordpress"],
    url: "https://opensource.creativecommons.org/",
  },
  {
    description: "Learning software for children",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/sugar-labs/pgbt7fp6gr6lhihd-360.png",
    name: "Sugar Labs",
    technologies: ["python", "gtk", "typescript", "javascipt"],
    url: "https://sugarlabs.org",
  },
  {
    description: "Automatically testing database systems",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/sqlancer/hzunjobwazuptdb6.png",
    name: "SQLancer",
    technologies: ["java", "sql"],
    url: "https://www.sqlancer.com",
  },
  {
    description: "Building platforms for reproducible AI Research",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/cloudcv/mxq9gvskhg4i5lyw-360.png",
    name: "CloudCV",
    technologies: ["python", "django", "docker", "angularjs", "aws"],
    url: "https://cloudcv.org/",
  },
  {
    description: "Software Verification, SAT & SMT solving",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/software-and-computational-systems-lab-at-lmu-munich/kcrheiieoyvdm0r7-360.png",
    name: "Software and Computational Systems Lab at LMU Munich",
    technologies: ["python", "java"],
    url: "https://www.sosy-lab.org/",
  },
  {
    description: "Free visual coding apps for computational thinking",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/international-catrobat-association/dfkxzmsqlkyvwi2o-360.png",
    name: "International Catrobat Association",
    technologies: ["javascript", "swift", "kotlin", "php", "flutter"],
    url: "https://www.catrobat.org",
  },
  {
    description: "All of AI, at your Fingertips.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/ivy-lets-unifyai/zlfatiyvgun6ec6e-360.png",
    name: "Ivy (lets-unify.ai)",
    technologies: ["python", "cython", "tensorflow", "pytorch", "Jax"],
    url: "https://lets-unify.ai",
  },
  {
    description: "Machine learning applications in science",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/machine-learning-for-science-ml4sci/rs5cxhuyh9dpwekt-360.png",
    name: "Machine Learning for Science (ML4SCI)",
    technologies: [
      "python",
      "machine learning",
      "c++",
      "data analysis",
      "artificial intelligence",
    ],
    url: "https://ml4sci.org/",
  },
  {
    description: "Global and Unified Access to Knowledge Graphs.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/dbpedia/cgjegpmawtu5fr6w-360.png",
    name: "DBpedia",
    technologies: ["python", "javascript", "java", "scala", "rdf"],
    url: "https://www.dbpedia.org/",
  },
  {
    description: "Healthcare for Humanity",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/librehealth/wulnuhdjtsi0ngiv-360.png",
    name: "LibreHealth",
    technologies: ["python", "javascript", "android", "java", "dart/flutter"],
    url: "https://librehealth.io",
  },
  {
    description: "JPF is a special JVM for software verification",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-jpf-team/w3jwxmplws09wxvq-360.png",
    name: "The JPF team",
    technologies: [
      "android",
      "java",
      "distributed systems",
      "jvm",
      "smt solvers",
    ],
    url: "https://github.com/javapathfinder/jpf-core/wiki",
  },
  {
    description: "Draw freely!",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/inkscape/qiomrjtmocpmomjf-360.png",
    name: "Inkscape",
    technologies: ["python", "c++", "svg"],
    url: "https://inkscape.org",
  },
  {
    description: "Scan code for origin, license and vulnerabilities",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/aboutcode/pmcafargc6wvl1ck-360.png",
    name: "AboutCode",
    technologies: ["python", "javascript", "Django+PostgreSQL", "C/Rust/Go"],
    url: "https://aboutcode.org",
  },
  {
    description: "Open source IP, tools & standards for ASIC/FPGA",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/chips-alliance/6tfmap6dqunmfu0f-360.png",
    name: "CHIPS Alliance",
    technologies: ["fpga", "chisel", "risc-v", "systemverilog", "ASIC"],
    url: "https://chipsalliance.org/",
  },
  {
    description: "Create teleimmersive multisensorial experiences.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/society-for-arts-and-technology-sat/egumgqulusylwlmh-360.png",
    name: "Society for Arts and Technology (SAT)",
    technologies: ["python", "javascript", "opengl", "c++", "supercollider"],
    url: "https://sat.qc.ca",
  },
  {
    description: "C library implementing TLS and DTLS",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gnutls/xl8zg8hb6elbg1j4.png",
    name: "GnuTLS",
    technologies: ["c", "Cryptography", "TLS"],
    url: "https://gitlab.com/gnutls/gnutls",
  },
  {
    description: "FreeType is a software library to render fonts.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/freetype/bbbcwzgimhkwpcvx-360.png",
    name: "FreeType",
    technologies: ["c", "autotools", "meson"],
    url: "https://freetype.org",
  },
  {
    description: "Aid discovery in complex cancer genomics data",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/cbioportal-for-cancer-genomics/fdxtjhb0urtqcyfe-360.png",
    name: "cBioPortal for Cancer Genomics",
    technologies: ["mysql", "javascript", "java", "react", "typescript"],
    url: "https://www.cbioportal.org/",
  },
  {
    description: "TensorFlow is a ML framework for everyone.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/tensorflow-d1/0sqdbtssij0tfcwy-360.png",
    name: "TensorFlow",
    technologies: ["machine learning", "tensorflow", "ai", "Jax", "keras"],
    url: "https://www.tensorflow.org/",
  },
  {
    description: "Create and distribute free geodata for the world",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/openstreetmap/ihw4tczyumj0yx81-360.png",
    name: "OpenStreetMap",
    technologies: ["python", "javascript", "java", "c++", "sql"],
    url: "https://www.openstreetmap.org/",
  },
  {
    description: "Web framework for perfectionists with deadlines",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/django-software-foundation-8o/685unxpkksrvfugu-360.png",
    name: "Django Software Foundation",
    technologies: ["python", "django"],
    url: "https://www.djangoproject.com",
  },
  {
    description: "Promote Open Standards and Open Source",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/open-technologies-alliance-gfoss/kiyijull8pfdypve-360.png",
    name: "Open Technologies Alliance - GFOSS",
    technologies: [
      "javascript",
      "c/c++",
      "nodejs",
      "python 3",
      "Machine Learning (ML)",
    ],
    url: "http://www.gfoss.eu",
  },
  {
    description: "Open Source License Compliance by OSS",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/fossology/bqfblnvpsqnfg5bh-360.png",
    name: "FOSSology",
    technologies: ["python", "postgresql", "c/c++", "go", "php"],
    url: "https://fossology.org",
  },
  {
    description: "Development of the GNU Operating System",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gnu-project/pm4yf7e7gm2jjyir.png",
    name: "GNU Project",
    technologies: ["c", "c++", "gcc", "autotools"],
    url: "https://www.gnu.org",
  },
  {
    description: "Free and open wireless networks",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/freifunk/bpcbaeecusvfzbzk-360.png",
    name: "freifunk",
    technologies: ["c", "python", "javascript", "openwrt", "gnu/linux"],
    url: "https://freifunk.net/en",
  },
  {
    description: "We code immersive and interactive aps with G Earth",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/liquid-galaxy-project/idbd8hebl6j7ajxn-360.png",
    name: "Liquid Galaxy project",
    technologies: ["python", "linux", "android", "flutter", "Google Earth"],
    url: "https://www.liquidgalaxy.eu",
  },
  {
    description: "A fresh approach to technical computing",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-julia-language/49fck3n7j5aqnpwu-360.png",
    name: "The Julia Language",
    technologies: [
      "machine learning",
      "julia",
      "data science",
      "gui",
      "models",
    ],
    url: "https://julialang.org",
  },
  {
    description: "Python-based CMS, with React front-end.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/plone-foundation/wivpatiziuhidzjw-360.png",
    name: "Plone Foundation",
    technologies: ["python", "javascript", "react"],
    url: "https://plone.org",
  },
  {
    description: "Open source team chat and communications platform",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/rocketchat/qnog9kebwa9atw3l-360.png",
    name: "rocket.chat",
    technologies: [
      "javascript",
      "raspberry pi",
      "typescript",
      "node",
      "meteorJS",
    ],
    url: "https://github.com/RocketChat",
  },
  {
    description: "Monitoring the Internet",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/internet-health-report/lifcnmh2qkq9cl5o-360.png",
    name: "Internet Health Report",
    technologies: ["python", "javascript", "apache kafka", "VueJS"],
    url: "https://ihr.iijlab.net",
  },
  {
    description: "Advance the Kotlin programming language",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/kotlin-foundation/2wyghqyy8nvvl4cq-360.png",
    name: "Kotlin Foundation",
    technologies: [
      "gradle",
      "kotlin",
      "jvm",
      "Parsers & Compilers",
      "Multiplatform",
    ],
    url: "https://kotlinfoundation.org/",
  },
  {
    description: "Simulating electromagnetic wave propagation",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gprmax/vm8kavyxz3csja8f-360.png",
    name: "gprMax",
    technologies: ["python", "cuda", "openmp", "mpi", "opencl"],
    url: "https://www.gprmax.com",
  },
  {
    description: "3D CAD & other computer-aided tech (CAx)",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/brl-cad/4ec07aqdfrvygfed-360.png",
    name: "BRL-CAD",
    technologies: ["python", "c/c++", "opengl", "opencl", "scripting"],
    url: "https://opencax.github.io/",
  },
  {
    description: "World’s most used penetration testing framework",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/metasploit/ggisatrqgjavuwd7-360.png",
    name: "Metasploit",
    technologies: ["c", "python", "postgresql", "ruby", "assembly"],
    url: "https://metasploit.com",
  },
  {
    description: "Guide and support the Scala community",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/scala-center/f5qjbrwguri7g3sv-360.png",
    name: "Scala Center",
    technologies: ["scala", "scala.js", "scala native"],
    url: "https://scala-lang.org/",
  },
  {
    description: "Open source software to the public free of charge",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/apache-software-foundation/hq22fwtmvdfjnsh9-360.png",
    name: "Apache Software Foundation",
    technologies: ["c", "java", "c++"],
    url: "https://apache.org",
  },
  {
    description: "Open-source mathematics software system",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/sagemath/1tcj7svgwadc13cj-360.png",
    name: "SageMath",
    technologies: ["python", "cython"],
    url: "https://www.sagemath.org",
  },
  {
    description: "Record, convert and stream audio & video",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/ffmpeg/9nltyc13lvn7dqn0-360.png",
    name: "FFmpeg",
    technologies: ["c", "git", "asm"],
    url: "https://ffmpeg.org/",
  },
  {
    description: "Open-source software for mass spectrometry",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mzmine-and-ms-dial/pdqwksmlm0rn7hwq-360.png",
    name: "MZmine and MS-DIAL",
    technologies: ["java", "c#", "javafx"],
    url: "https://mzmine-ms-dial-gsoc.github.io/",
  },
  {
    description: "R software for statistical computing & graphics",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/r-project-for-statistical-computing/7regeqcjh95nenso-360.png",
    name: "R project for statistical computing",
    technologies: ["c", "javascript", "c++", "r-project", "fortran"],
    url: "https://www.r-project.org/",
  },
  {
    description: "A real-time operating system for Earth & Space",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/rtems-project/mo975scxu6bi0bfj-360.png",
    name: "RTEMS Project",
    technologies: ["python", "c/c++", "assembly", "posix"],
    url: "https://www.rtems.org/",
  },
  {
    description: "Open music / book metadata, music recommendations",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/metabrainz-foundation-inc/m7lax42edddowwnl-360.png",
    name: "MetaBrainz Foundation Inc",
    technologies: ["python", "react", "perl", "postgres", "spark"],
    url: "https://metabrainz.org",
  },
  {
    description: "SymPy is a Python library for symbolic mathematics",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/sympy/iz2tcxocrknp1sm0-360.png",
    name: "SymPy",
    technologies: ["python", "numpy", "jupyter"],
    url: "https://www.sympy.org/",
  },
  {
    description: "A free/open-source machine translation platform",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/apertium/bonpbccfuafpa634-360.png",
    name: "Apertium",
    technologies: ["python", "javascript", "c++", "xml", "bash"],
    url: "https://apertium.org/",
  },
  {
    description: "Honeypots and Threat Intelligence R&D",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-honeynet-project/pvycoc21p2ketj7b-360.png",
    name: "The Honeynet Project",
    technologies: ["python", "javascript", "django", "go", "docker"],
    url: "https://honeynet.org",
  },
  {
    description: "Analysis of molecular simulations data with Python",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mdanalysis/kf8rugznsqeskumi-360.png",
    name: "MDAnalysis",
    technologies: ["python", "cython", "c/c++"],
    url: "https://www.mdanalysis.org",
  },
  {
    description: "Advancing Open Source & Open Science for Chemistry",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/open-chemistry/esda0gvsxomll6my-360.png",
    name: "Open Chemistry",
    technologies: ["python", "javascript", "opengl", "c++", "c++14"],
    url: "https://openchemistry.org/",
  },
  {
    description: "Security scanning tool for Google Cloud",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gcp-scanner/llfil1bsqmtp4cyj-360.png",
    name: "GCP Scanner",
    technologies: ["python", "google cloud"],
    url: "https://github.com/google/gcp_scanner/wiki/Google-Summer-of-Code-2023",
  },
  {
    description: "Equity in education to transform lives",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/learning-equality/ow1kqnceuschz53h-360.png",
    name: "Learning Equality",
    technologies: ["python", "javascript", "django", "vue.js"],
    url: "https://learningequality.org/",
  },
  {
    description: "Self-expression through filmmaking",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/pitivi/tghrhxkqd9hb4cks-360.png",
    name: "Pitivi",
    technologies: ["c", "python", "gtk", "gstreamer"],
    url: "https://www.pitivi.org/",
  },
  {
    description: "Everyone can contribute",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gitlab/mfhpav5dgegzwg8z-360.png",
    name: "GitLab",
    technologies: ["javascript", "ruby on rails", "go", "ruby", "vue"],
    url: "https://gitlab.com",
  },
  {
    description: "Toolkit for cancer imaging research",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/camicroscope/gnuvwzgnlt6gpjwy-360.png",
    name: "caMicroscope",
    technologies: ["python", "javascript", "mongodb", "opencv", "tensorflow"],
    url: "https://camicroscope.github.io",
  },
  {
    description: "Accelerating Engineering Innovation",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/micro-electronics-research-lab-uitu/el9byq6f4dfc1y77-360.png",
    name: "Micro Electronics Research Lab - UITU",
    technologies: ["RISCV", "Processor", "Hardware", "systemonchip", "memory"],
    url: "https://www.merledupk.org",
  },
  {
    description: "Write Code, Save Lives.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/openmrs/evthgp3dhsqx5kyx-360.png",
    name: "OpenMRS",
    technologies: ["mysql", "javascript", "java", "reactjs", "fhir"],
    url: "https://openmrs.org/",
  },
  {
    description: "The powerful Python CMS for modern websites",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/wagtail/so6hnqeqh2cp4jbx-360.png",
    name: "Wagtail",
    technologies: ["python", "javascript", "django"],
    url: "https://wagtail.org/",
  },
  {
    description: "The Hackable Network Management System",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/openwisp/xgfy0r7femccwzvj-360.png",
    name: "OpenWISP",
    technologies: ["python", "javascript", "django", "lua", "openwrt"],
    url: "https://openwisp.org",
  },
  {
    description: "SCoRe Lab develops FOSS softwares for everyone!!!",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/score-lab/x8apbdrxwdrmqv7f-360.png",
    name: "SCoRe Lab",
    technologies: ["python", "java", "go", "nodejs", "reactjs"],
    url: "https://scorelab.org/",
  },
  {
    description: "A flexible, source-based Linux distribution.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/gentoo-foundation/lmavef6x2gwpske4-360.png",
    name: "Gentoo Foundation",
    technologies: ["c", "python", "shell", "linux", "bash"],
    url: "https://www.gentoo.org/",
  },
  {
    description: "Working together for Free and Open Source Silicon",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/free-and-open-source-silicon-foundation/ohzvntegl9qlt75w-360.png",
    name: "Free and Open Source Silicon Foundation",
    technologies: ["verilog", "risc-v", "compiler", "web development"],
    url: "https://www.fossi-foundation.org",
  },
  {
    description: "Free platform for interactive, tutor-like lessons",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/oppia-foundation/nqvgy9fm3aqshwtv-360.png",
    name: "Oppia Foundation",
    technologies: ["python", "google app engine", "angular", "typescript"],
    url: "https://www.oppia.org",
  },
  {
    description: "Australian Umbrella Org for Open-Source Projects",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/aossie/oo1wd34pc1ytrq6a-360.png",
    name: "AOSSIE",
    technologies: [
      "python",
      "javascript",
      "machine learning",
      "scala",
      "Blockchain",
    ],
    url: "https://aossie.gitlab.io/",
  },
  {
    description: "Transforming non-profit organizations in the cloud",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-palisadoes-foundation/d9zsxo0idjsl7kug-360.png",
    name: "The Palisadoes Foundation",
    technologies: ["mongodb", "flutter", "graphql", "typescript"],
    url: "https://www.palisadoes.org",
  },
  {
    description: "XSF develops an open-standard messaging protocol",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/xmpp-standards-foundation/1qfi0ofcfmb8qin8-360.png",
    name: "XMPP Standards Foundation",
    technologies: ["vala", "xmpp", "swift", "dart", "Objective C"],
    url: "https://xmpp.org/",
  },
  {
    description: "FreeBSD: An OS for servers to embedded systems",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/the-freebsd-project/4jmspor6mcto9wti-360.png",
    name: "The FreeBSD Project",
    technologies: ["c", "llvm", "assembly", "make", "POSIX shell"],
    url: "https://www.freebsd.org/",
  },
  {
    description: "The World’s Most Popular Music Notation Software",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/musescore/tgkjkzlqhj0qru5z.png",
    name: "MuseScore",
    technologies: ["c++", "qt", "qml", "cmake"],
    url: "https://musescore.org/",
  },
  {
    description: "Innovative ideas & technologies in geoinformatics",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/52north-spatial-information-research-gmbh/gzamo2sqfwcmcobt-360.png",
    name: "52°North Spatial Information Research GmbH",
    technologies: [
      "javascript",
      "android",
      "java",
      "web services",
      "ogc standards",
    ],
    url: "https://52north.org/",
  },
  {
    description: "Helps to adheres of Java coding standard",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/checkstyle/e8ubktvaft8eljli-360.png",
    name: "checkstyle",
    technologies: ["java", "antlr"],
    url: "https://checkstyle.org",
  },
  {
    description: "LLVM Compiler Infrastructure",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/llvm-compiler-infrastructure/ize6lrlftlvdxtqe-360.png",
    name: "LLVM Compiler Infrastructure",
    technologies: ["llvm", "c++", "clang", "mlir"],
    url: "http://www.llvm.org",
  },
  {
    description: "Jenkins, build great things at any scale",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/jenkins-wp/7qlgfron9nyj194y-360.png",
    name: "Jenkins",
    technologies: ["javascript", "java", "go", "docker", "kubernetes"],
    url: "https://jenkins.io/",
  },
  {
    description: "Ruby is an object-oriented programming language",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/ruby/dc6i7iw8w39rktw1-360.png",
    name: "Ruby",
    technologies: ["c", "java", "ruby on rails", "ruby", "rubygems"],
    url: "https://www.ruby-lang.org/",
  },
  {
    description: "Exploring new approaches to civic life.",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/mayors-office-of-new-urban-mechanics/nu2mgneanw1efocb-360.png",
    name: "Mayor's Office of New Urban Mechanics",
    technologies: ["python", "javascript", "ruby", "tensorflow"],
    url: "https://www.boston.gov/mechanics",
  },
  {
    description: "Biomedical research to advance healthcare",
    image_url:
      "https://summerofcode.withgoogle.com/media/org/department-of-biomedical-informatics-emory-university/l9jrm7pdhwnkxh3b-360.png",
    name: "Department of Biomedical Informatics, Emory University",
    technologies: ["python", "javascript", "java", "workflows", "dicom"],
    url: "https://med.emory.edu/departments/biomedical-informatics/",
  },
];

const ProjectCard = ({ project }) => (
  <div className="w-full mx-auto text-center bg-slate-300 rounded-xl shadow-md overflow-hidden m-4 md:max-w-2xl">
    <img
      className="bg-gray-600 text-white text-xl md:text-4xl underline object-contain py-2 object-center w-full h-20"
      src={project.image_url}
      alt={project.name}
    />
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">{project.name}</h2>
      <p className="text-gray-600">{project.description}</p>
      <ul className="mt-4">
        {project.technologies.map((topic, index) => (
          <li key={index} className="text-sm text-gray-600">
            {topic}
          </li>
        ))}
      </ul>
      </div>
      <div className="flex h-12 justify-evenly items-center bg-slate-600">
        <a
          href={project.url} // Replace placeholder URL with the actual project URL
          target="_blank"
          rel="noopener noreferrer"
          className=" block text-blue-400 font-semibold hover:text-white hover:underline"
        >
          Visit Website
        </a>
        <a
          href={`https://github.com/${project.name
            .split(" ")
            .slice(0, 1)
            .join("")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-400 font-semibold hover:text-white hover:underline"
        >
          Visit Repository
        </a>
      </div>

  </div>
);

const ProjectList = ({ projects, visibleProjects }) => (
  <div className="w-3/4">
    {visibleProjects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
);

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 25));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterProjects = () => {
    const filteredProjects = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.topics.some((topic) =>
          topic.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setVisibleProjects(filteredProjects.slice(0, 25));
  };

  const loadMore = () => {
    const nextVisibleProjects = projects.slice(0, visibleProjects.length + 25);
    setVisibleProjects(nextVisibleProjects);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-white md:text-6xl lg:text-7xl mt-4 mb-4">
        GSOC Programs Of 2023
      </h1>
      <input
        type="text"
        placeholder="Search by name or topics"
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 w-3/4  m-4 border border-gray-400 rounded-md"
      />
      <button
        onClick={filterProjects}
        className="m-4 bg-blue-500 text-white py-2 px-4 hover:bg-blue-900 rounded-full"
      >
        Search
      </button>
              <ProjectList projects={projects} visibleProjects={visibleProjects} />

      {visibleProjects.length < projects.length && (
        <button
          onClick={loadMore}
          className="m-4 bg-blue-500 text-white py-2 px-4 hover:bg-blue-900 rounded-full"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Programs;
