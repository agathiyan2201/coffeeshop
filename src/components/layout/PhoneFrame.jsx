/** Desktop: centered 375×812 phone frame. Phones (≤480px): full screen. */
export default function PhoneFrame({ children }) {
  return (
    <div className="px-gutter flex min-h-full items-center justify-center py-6 phone:block phone:h-full phone:!p-0">
      <main className="relative h-[812px] w-[375px] max-w-full overflow-hidden rounded-[40px] bg-surface shadow-device phone:h-full phone:w-full phone:rounded-none phone:shadow-none">
        {children}
      </main>
    </div>
  );
}
