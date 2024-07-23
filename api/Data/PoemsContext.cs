using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.ApplicationDBContext
{
    public class PoemsContext : DbContext
    {
        public PoemsContext(DbContextOptions<PoemsContext> dbContextOptions) : base(dbContextOptions) 
        {
        }

        public DbSet<Poem> Poems { get; set; }
        public DbSet<Author> Authors { get; set; }
    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Author>()
                .HasMany(a => a.Poems)
                .WithOne(p => p.Author)
                .HasForeignKey(p => p.AuthorId);
        }
    }
}