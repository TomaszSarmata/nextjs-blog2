import Image from "next/image";

export default function MyImage() {
  return (
    <Image
      src="/images/use-modified.png"
      width={144}
      height={144}
      alt="my image"
    ></Image>
  );
}
